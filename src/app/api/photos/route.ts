import { NextResponse } from "next/server"

const ALBUM_URL =
  "https://photos.google.com/share/AF1QipNUrZGWJlqpVgLsOjeApSG2adbTPvosT1Y_4CRucwGTcNiYVczb6AiyGSnexBvT-Q?key=eEdNeUk0VzhaMzJlTXZETDRjLXRwR0lwbjBUQnl3"

export interface PhotoData {
  url: string
  width: number
  height: number
}

async function fetchAlbumImages(): Promise<PhotoData[]> {
  const res = await fetch(ALBUM_URL, {
    next: { revalidate: 3600 },
    headers: { "User-Agent": "Mozilla/5.0" },
  })
  const html = await res.text()

  const images: PhotoData[] = []
  const urlPattern = /"https:\/\/lh3\.googleusercontent\.com\/pw\/[^"]+"/g
  const dimPattern = /\[(\d+),(\d+),null,null,null,null,null,null,\[null,null,3\]\]/g

  const urls: string[] = []
  let match
  while ((match = urlPattern.exec(html)) !== null) {
    const url = match[0].replace(/^"|"$/g, "").replace(/=w\d+-h\d+-no$/, "=w800-no")
    if (!urls.includes(url)) urls.push(url)
  }

  const dims: [number, number][] = []
  while ((match = dimPattern.exec(html)) !== null) {
    dims.push([parseInt(match[1]), parseInt(match[2])])
  }

  const count = Math.min(urls.length, dims.length)
  for (let i = 0; i < count; i++) {
    images.push({ url: urls[i], width: dims[i][0], height: dims[i][1] })
  }

  if (images.length === 0 && urls.length > 0) {
    for (const url of urls) {
      images.push({ url, width: 800, height: 800 })
    }
  }

  return images
}

export async function GET() {
  try {
    const images = await fetchAlbumImages()
    return NextResponse.json({ images })
  } catch {
    return NextResponse.json({ images: [] })
  }
}
