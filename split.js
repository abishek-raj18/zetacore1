const sharp = require('sharp');
const fs = require('fs');

async function splitImage() {
  const imagePath = 'd:\\zeta core\\website\\assets\\Icon PNG.png';
  const image = sharp(imagePath);
  const metadata = await image.metadata();
  console.log(`Width: ${metadata.width}, Height: ${metadata.height}`);

  const sectionWidth = Math.floor(metadata.width / 4);

  const outputs = [
    'd:\\zeta core\\vite-app\\public\\assets\\icon-research.png',
    'd:\\zeta core\\vite-app\\public\\assets\\icon-industrial.png',
    'd:\\zeta core\\vite-app\\public\\assets\\icon-worldwide.png',
    'd:\\zeta core\\vite-app\\public\\assets\\icon-technical.png'
  ];

  for (let i = 0; i < 4; i++) {
    await sharp(imagePath)
      .extract({ left: i * sectionWidth, top: 800, width: sectionWidth, height: sectionWidth })
      .toFile(outputs[i]);
    console.log(`Saved ${outputs[i]}`);
  }
}

splitImage().catch(console.error);
