import Script from "next/script";

export const metadata = {
  title: "Card Stack — test",
};

const cards = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
];

export default function TestStackPage() {
  return (
    <>
      <link rel="stylesheet" href="/stack/stack.css" />
      <Script src="/stack/stack.js" strategy="afterInteractive" />

      <main
        style={{
          minHeight: "100vh",
          background: "#0b0b10",
          color: "#e7e7ee",
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
          padding: "64px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <header style={{ marginBottom: 48 }}>
            <h1 style={{ fontSize: 32, fontWeight: 600, margin: 0 }}>
              Card Stack — GSAP port
            </h1>
            <p style={{ opacity: 0.7, marginTop: 8 }}>
              Same JS/CSS that ships to Webflow, loaded from{" "}
              <code>/stack/</code>. Drag a card past the threshold, or click
              when <code>sendToBackOnClick</code> is on.
            </p>
          </header>

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 64,
              alignItems: "start",
            }}
          >
            <Demo
              title="Default (drag only)"
              note="sensitivity=180"
              attrs={{ "data-stack-sensitivity": "180" }}
            />

            <Demo
              title="Random rotation + click"
              note="randomRotation, sendToBackOnClick"
              attrs={{
                "data-stack-random-rotation": "true",
                "data-stack-sensitivity": "180",
                "data-stack-send-to-back-on-click": "true",
              }}
            />

            <Demo
              title="Autoplay (pauses on hover)"
              note="autoplay=2s, pauseOnHover"
              attrs={{
                "data-stack-autoplay": "true",
                "data-stack-autoplay-delay": "2000",
                "data-stack-pause-on-hover": "true",
                "data-stack-random-rotation": "true",
              }}
            />
          </section>
        </div>
      </main>
    </>
  );
}

function Demo({
  title,
  note,
  attrs,
}: {
  title: string;
  note: string;
  attrs: Record<string, string>;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ width: 280, height: 280 }} data-stack {...attrs}>
        {cards.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <div key={i} data-stack-card>
            <img src={src} alt={`card-${i + 1}`} />
          </div>
        ))}
      </div>
      <div>
        <div style={{ fontWeight: 600 }}>{title}</div>
        <div style={{ opacity: 0.6, fontSize: 13 }}>{note}</div>
      </div>
    </div>
  );
}
