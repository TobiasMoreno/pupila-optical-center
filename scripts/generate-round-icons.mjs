import sharp from "sharp";

const source = "public/logo-pupila.jpeg";

async function generateRoundIcon(size, output) {
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`,
  );

  await sharp(source)
    .resize(size, size, { fit: "cover" })
    .composite([{ input: mask, blend: "dest-in" }])
    .png({ compressionLevel: 9 })
    .toFile(output);
}

await Promise.all([
  generateRoundIcon(512, "src/app/icon.png"),
  generateRoundIcon(180, "src/app/apple-icon.png"),
]);
