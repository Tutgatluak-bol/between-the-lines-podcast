
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const publicDir = path.join(__dirname, "../public");
const imagesDir = path.join(publicDir, "images");

async function optimizeToWebP(source, destination, width = 1920) {
  const inputPath = path.join(imagesDir, source);
  const outputPath = path.join(imagesDir, destination);

  if (!fs.existsSync(inputPath)) {
    console.warn(`Skipped: ${source} (source file not found)`);
    return;
  }

  const originalSize = fs.statSync(inputPath).size;

  await sharp(inputPath)
    .rotate()
    .resize({
      width,
      withoutEnlargement: true,
    })
    .webp({
      quality: 82,
      effort: 6,
    })
    .toFile(outputPath);

  const optimizedSize = fs.statSync(outputPath).size;
  const reduction = (
    ((originalSize - optimizedSize) / originalSize) *
    100
  ).toFixed(1);

  console.log(
    `Optimized: ${destination} | ${formatSize(originalSize)} → ${formatSize(optimizedSize)} | ${reduction}% reduction`
  );
}

async function optimizePNG(source, destination) {
  const inputPath = path.join(imagesDir, source);
  const outputPath = path.join(imagesDir, destination);

  if (!fs.existsSync(inputPath)) {
    console.warn(`Skipped: ${source} (source file not found)`);
    return;
  }

  await sharp(inputPath)
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
    .toFile(outputPath);

  console.log(`Optimized: ${destination}`);
}

async function optimizeLogo() {
  const inputPath = path.join(
    publicDir,
    "logo",
    "between-the-lines-logo.png"
  );

  const outputPath = path.join(
    publicDir,
    "logo",
    "between-the-lines-logo-optimized.png"
  );

  if (!fs.existsSync(inputPath)) {
    console.warn("Skipped: logo source file not found");
    return;
  }

  await sharp(inputPath)
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
    .toFile(outputPath);

  console.log("Optimized: between-the-lines-logo-optimized.png");
}

function formatSize(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function optimizeImages() {
  try {
    console.log("\nStarting image optimization...\n");

    // Homepage hero
    await optimizeToWebP(
      "host-studio.png",
      "host-studio.webp"
    );

    // About page microphone hero
    await optimizeToWebP(
      "about-microphone.png",
      "about-microphone.webp"
    );

    // Be a Guest page hero
    await optimizeToWebP(
      "between-the-lines-host-and-guest.png",
      "between-the-lines-host-and-guest.webp"
    );

    // Social sharing image
    await optimizePNG(
      "og-between-the-lines.png",
      "og-between-the-lines-optimized.png"
    );

    // Brand logo
    await optimizeLogo();

    console.log("\nImage optimization completed successfully.");
  } catch (error) {
    console.error("\nImage optimization failed:", error);
    process.exitCode = 1;
  }
}

optimizeImages();
