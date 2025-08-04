import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicon() {
  const inputPath = join(__dirname, '../apps/router/public/favicon.png');
  const outputPath = join(__dirname, '../apps/router/public/favicon.ico');

  try {
    await sharp(inputPath)
      .resize(32, 32)
      .toFile(outputPath);
    
    console.log('✅ Favicon.ico generado exitosamente');
  } catch (error) {
    console.error('Error generando favicon:', error);
  }
}

generateFavicon();