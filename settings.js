import 'dotenv/config';

const settings = {
/* ================= DATABASE ================= */

// Set ONE database URL here — the bot auto-detects the type from the prefix:
//   mongodb:// or mongodb+srv://  → MongoDB
//   postgres:// or postgresql://  → PostgreSQL
//   mysql:// or mysql2://         → MySQL
// Leave empty to use local JSON storage (no DB required).
DATABASE_URL: process.env.DATABASE_URL || '',
    
/* ================= BOT IDENTITY ================= */
botName: process.env.BOT_NAME || 'Ali Mughal bot',
botOwner: process.env.BOT_OWNER || 'Ali Mughal',
ownerNumber: process.env.OWNER_NUMBER || '923046813269',
author: process.env.AUTHOR || 'Ali Mughal',
packname: process.env.PACKNAME || 'Ali Mughal bot',
description: process.env.DESCRIPTION || 'Multi-device WhatsApp Bot',

/* ================= SESSION ================= */

sessionId: process.env.SESSION_ID || 'H4sIAAAAAAAAA5VUXY+iSBT9L/WqGb5ExaSTRUBAREBUaDfzUEKBJVggFCg98b9vsKdnOpvspPet6t7Kueeee279AKTANbJQB2Y/QFnhFlLUH2lXIjAD8yZJUAWGIIYUghmYmivBc26MIIy3TmDtnYG6Uwryqu3jlUi8dhGmhWrUdpKzL+AxBGVzzHH0B8Cbaow3a2WPNvX6bVLvgsNipGLXh/GV7V7LDtnnUc1mK4m/vYBHjwhxhUmqlSd0QRXMLdS5EFdfo2/KFU4SVarcge4vNPM2uI8ua+TVq9UyeQ002Thd+fUCvelfpD9Gy+O5XBCj8Ox5qTBj735t1PEmJFxraFA8mMyxnG448gR8DEGNU4JiM0aEYtp9WXes0AINqkKuyX2sTs4llrtSFyC/C7Idq0xYj9f3Cxy2e/lrxL2WOd7OGyc9rLe1LbN3e7toNY2hyvai24tZdoedI1i7rWp/Ju5WH17J/o/u2tpurs4tWJYVZQKyX587974xgkawrbluHPTDJGzWJMS76Gv0zbG6FOWgZlxzevXe8pZG09dgsdtk4Ty8WUefasxrt75GyifdIW2qP7G0WiJrHUlSk21W63l5H0O7LZFnNm6dFee2VURhFHlLLiIjfnt2ixO9aCgfvSFy7cLO8H3HINHUb07X0wh69LDRcJq+PDvKUGfGYMY9hqBCKa5pBSkuSB+TxCGAceujqEL0qS5QGGcJxQOlU8dd+MogjqGvb/bXFtkk2SiRHBiHiUSgSswXMARlVUSorlFs4JoWVWejuoYpqsHs7+9DQNCdvs+tryZwQ5DgqqY70pR5AeOPoX4kYRQVDaF+RyKlP6AKzNjfYUQpJmndy9gQWEUn3CLlBGkNZgnMa/SrQVShGMxo1aBfS6sUca+7FIwm22U4B0Nwec4Dx32UF9jReMoJ/Fia8aO/6m+3HhaW5TeCKBiC/PmMG4kSy3ISy47ZsSD0L/vE4xfDHjBGFOK87pW0nagWWUOzLSTEO12XtVRWUhn87ujDGe/SU1XY+V7rE82E2Av49GhwS+bm6JEbehEj3ONsNxrvLGX+lP7fIGAGWjW/S3u9ai9nvtv6QqcftS1M4iy5wcQTznFq+OdyxFhGO8i7fNp6DENdU+ayaLBPanGPVqSRw4bq1mDChXcz5ZfK7aWvFqMWR+hzsaMBDwe+5TrONVaNrloOcwxPluoEjO6LUKz0/Xa+dBdiI7GDq8AvvAkuRVOZExdZcP9aBL5dUGTYc0tXkCA32bE9e++efe5M/vOvwk879bPqrwlGz9Un8IK+Mrt34r3F2MfwE8bPz+Q/FnJ+9CROy1ZseVf0IlvQQr9LfjJVT0TlWMOVpuFh4Ti5kqY+eDy+D0GZQ5oU1QXMACRxVeAYDEFVNL1nTZIUfyimyKyppanZd57Dmsq/92CLL6im8FKCGTeRWEGa8hPp8Q+kYXD1PAcAAA==',
pairingNumber: process.env.PAIRING_NUMBER || '923046813269',
CDN: 'https://media.mrfrankofc.gleeze.com'

};

// Sync DATABASE_URL back to process.env so all modules pick it up
// (works whether the value was in .env or hardcoded above)
if (settings.DATABASE_URL && !process.env.DATABASE_URL) {
    process.env.DATABASE_URL = settings.DATABASE_URL;
}

export default settings;
