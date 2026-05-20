"use server"

export async function submitOrder(_prevState: unknown, formData: FormData) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    return { error: "Telegram bot not configured" }
  }

  const name = formData.get("name")
  const email = formData.get("email")
  const tier = formData.get("tier")
  const description = formData.get("description")

  const msg = [
    "New: Order Received",
    `Name: ${name}`,
    `Email: ${email}`,
    `Tier: ${tier}`,
    `Description: ${description}`,
  ].join("\n")

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: msg }),
  })

  if (!res.ok) {
    return { error: "Failed to send order" }
  }

  return { success: true }
}
