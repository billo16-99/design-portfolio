export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Left blobs */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[600px] opacity-30"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, #D4D0C8 0%, transparent 70%)",
          borderRadius: "60% 40% 50% 30% / 40% 50% 60% 50%",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/3 -left-16 w-[400px] h-[500px] opacity-20"
        style={{
          background: "radial-gradient(ellipse at 40% 60%, #C8C4B8 0%, transparent 70%)",
          borderRadius: "50% 60% 40% 70% / 60% 40% 70% 50%",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute bottom-1/4 -left-24 w-[350px] h-[450px] opacity-25"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, #E8E5DD 0%, transparent 70%)",
          borderRadius: "70% 30% 60% 40% / 30% 70% 40% 60%",
          filter: "blur(55px)",
        }}
      />

      {/* Right blobs */}
      <div
        className="absolute -top-16 -right-20 w-[450px] h-[550px] opacity-20"
        style={{
          background: "radial-gradient(ellipse at 60% 50%, #D4D0C8 0%, transparent 70%)",
          borderRadius: "40% 60% 30% 70% / 50% 40% 70% 50%",
          filter: "blur(65px)",
        }}
      />
      <div
        className="absolute top-1/2 -right-16 w-[380px] h-[480px] opacity-15"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, #C0BCB0 0%, transparent 70%)",
          borderRadius: "55% 45% 65% 35% / 45% 60% 40% 55%",
          filter: "blur(55px)",
        }}
      />
      <div
        className="absolute bottom-20 -right-24 w-[320px] h-[420px] opacity-20"
        style={{
          background: "radial-gradient(ellipse at 40% 60%, #E8E5DD 0%, transparent 70%)",
          borderRadius: "45% 55% 35% 65% / 55% 40% 60% 45%",
          filter: "blur(50px)",
        }}
      />
    </div>
  )
}
