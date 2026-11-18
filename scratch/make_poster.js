const sharp = require('sharp');
const fs = require('fs');

async function makePoster() {
  const width = 1280;
  const height = 720;

  // Resize the logo to fit nicely in the center card
  const logoResized = await sharp('public/images/Final Logo.jpg')
    .resize(360, 360, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toBuffer();

  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#04100B" />
          <stop offset="50%" stop-color="#0A2417" />
          <stop offset="100%" stop-color="#04100B" />
        </linearGradient>
        <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#E58C05" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#04100B" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <circle cx="${width/2}" cy="260" r="320" fill="url(#goldGlow)" />

      <!-- Subtle border -->
      <rect x="24" y="24" width="${width-48}" height="${height-48}" rx="16" fill="none" stroke="#E58C05" stroke-opacity="0.35" stroke-width="1.5" />

      <!-- White Logo Container with shadow -->
      <rect x="${(width-380)/2}" y="70" width="380" height="380" rx="24" fill="#FFFFFF" stroke="#E58C05" stroke-width="3" />

      <!-- Text -->
      <text x="${width/2}" y="500" font-family="'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">R&amp;B FOODS (PVT.) LTD.</text>
      <text x="${width/2}" y="542" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18" font-weight="600" fill="#F3A82A" text-anchor="middle" letter-spacing="3">SHORKOT ASEPTIC PROCESSING FACILITY &#8226; BERTUZZI (ITALY)</text>

      <!-- Play Button Badge -->
      <g transform="translate(${(width-280)/2}, 580)">
        <rect width="280" height="56" rx="28" fill="#E58C05" />
        <circle cx="36" cy="28" r="16" fill="#04100B" />
        <polygon points="32,20 44,28 32,36" fill="#FFFFFF" />
        <text x="150" y="35" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" font-weight="700" fill="#04100B" text-anchor="middle">WATCH PLANT TOUR</text>
      </g>
    </svg>
  `);

  await sharp(svgOverlay)
    .composite([
      {
        input: logoResized,
        top: 80,
        left: Math.round((width - 360) / 2)
      }
    ])
    .jpeg({ quality: 92 })
    .toFile('public/images/video-poster-monogram.jpg');

  console.log('Created public/images/video-poster-monogram.jpg successfully');
}

makePoster().catch(console.error);
