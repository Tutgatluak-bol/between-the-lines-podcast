
const sharp = require("sharp");
const path = require("path");

const publicDir = path.join(__dirname, "../public");
const imagesDir = path.join(publicDir, "images");

async function optimizeImages() {
  try {
    // Optimize homepage hero image
    await sharp(path.join(imagesDir, "host-studio.png"))
      .resize({
        width: 1920,
        withoutEnlargement: true,
      })
      .webp({ quality: 82, effort: 6 })
      .toFile(path.join(imagesDir, "host-studio.webp"));

    console.log("Optimized: host-studio.webp");

    // Optimize social sharing image while preserving PNG
    await sharp(path.join(imagesDir, "og-between-the-lines.png"))
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(path.join(imagesDir, "og-between-the-lines-optimized.png"));

    console.log("Optimized: og-between-the-lines-optimized.png");

    // Optimize logo while preserving transparency
    await sharp(
      path.join(publicDir, "logo", "between-the-lines-logo.png")
    )
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(
        path.join(publicDir, "logo", "between-the-lines-logo-optimized.png")
      );

    console.log("Optimized: between-the-lines-logo-optimized.png");

    console.log("\nImage optimization completed.");
  } catch (error) {
    console.error("Image optimization failed:", error);
    process.exitCode = 1;
  }
}

optimizeImages();
