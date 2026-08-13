import sharp from "sharp";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0b0d0c"/>
  <g opacity="0.12" stroke="#faf8f2" stroke-width="1">
    ${Array.from({ length: 18 }, (_, index) => `<line x1="${index * 72}" y1="0" x2="${index * 72}" y2="630"/>`).join("")}
    ${Array.from({ length: 10 }, (_, index) => `<line x1="0" y1="${index * 72}" x2="1200" y2="${index * 72}"/>`).join("")}
  </g>
  <circle cx="1010" cy="120" r="280" fill="#ff5a36" opacity="0.09"/>
  <g fill="none" stroke="#ff5a36" stroke-width="3" opacity="0.8">
    <path d="M710 390 C820 270 890 500 1020 360 C1100 270 1150 330 1240 290"/>
    <path d="M710 420 C820 300 890 530 1020 390 C1100 300 1150 360 1240 320" opacity="0.62"/>
    <path d="M710 450 C820 330 890 560 1020 420 C1100 330 1150 390 1240 350" opacity="0.38"/>
  </g>
  <text x="64" y="72" fill="#ff5a36" font-family="monospace" font-size="17" font-weight="700" letter-spacing="2">ANTON IOSIFOV · SOFTWARE ENGINEERING</text>
  <text x="64" y="226" fill="#faf8f2" font-family="Arial, Helvetica, sans-serif" font-size="94" font-weight="700" letter-spacing="-6">Building software</text>
  <text x="64" y="318" fill="#d8d8d0" font-family="Arial, Helvetica, sans-serif" font-size="94" font-weight="700" letter-spacing="-6">from first idea</text>
  <text x="64" y="415" fill="#ff5a36" font-family="Georgia, serif" font-size="102" font-style="italic" letter-spacing="-4">to production.</text>
  <text x="68" y="544" fill="#b9bbb2" font-family="Arial, Helvetica, sans-serif" font-size="24">Full-Stack Software Engineer · Web · Mobile · Cloud · Applied AI</text>
  <text x="1084" y="568" fill="#faf8f2" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="700">AI</text>
  <text x="1130" y="550" fill="#ff5a36" font-family="monospace" font-size="12" font-weight="700">26</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("public/og-image.png");
