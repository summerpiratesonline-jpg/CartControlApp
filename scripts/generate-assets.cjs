const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'assets');
fs.mkdirSync(assetsDir, { recursive: true });

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc & 1) ? ((crc >>> 1) ^ 0xEDB88320) : (crc >>> 1);
    }
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function createChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const t = Buffer.from(type, 'ascii');
  const crcInput = Buffer.concat([t, data]);
  const crc = crc32(crcInput);
  const c = Buffer.alloc(4);
  c.writeUInt32BE(crc);
  return Buffer.concat([len, t, data, c]);
}

function createPNG(w, h, r, g, b) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const raw = Buffer.alloc(h * (1 + w * 3));
  for (let y = 0; y < h; y++) {
    const off = y * (1 + w * 3);
    raw[off] = 0;
    for (let x = 0; x < w; x++) {
      const po = off + 1 + x * 3;
      raw[po] = r; raw[po+1] = g; raw[po+2] = b;
    }
  }
  return Buffer.concat([sig, createChunk('IHDR', ihdr), createChunk('IDAT', zlib.deflateSync(raw)), createChunk('IEND', Buffer.alloc(0))]);
}

fs.writeFileSync(path.join(assetsDir, 'icon.png'), createPNG(1024, 1024, 15, 23, 42));
fs.writeFileSync(path.join(assetsDir, 'android-icon-foreground.png'), createPNG(1024, 1024, 15, 23, 42));
fs.writeFileSync(path.join(assetsDir, 'android-icon-background.png'), createPNG(1024, 1024, 15, 23, 42));
fs.writeFileSync(path.join(assetsDir, 'android-icon-monochrome.png'), createPNG(1024, 1024, 255, 255, 255));
fs.writeFileSync(path.join(assetsDir, 'favicon.png'), createPNG(48, 48, 15, 23, 42));
console.log('Assets generated');
