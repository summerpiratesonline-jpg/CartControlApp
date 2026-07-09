const PRICE_PATTERNS = [
  /[€$£]\s*(\d+[.,]\d{2})\b/,
  /(\d+[.,]\d{2})\s*[€$£]/,
  /price[:\s]*[€$£]?\s*(\d+[.,]\d{2})/i,
  /total[:\s]*[€$£]?\s*(\d+[.,]\d{2})/i,
  /(\d+[.,]\d{2})/,
]

export type OcrResult = {
  name: string
  price: number
  rawText: string
  confidence: 'high' | 'medium' | 'low'
}

export function parseOcrText(rawText: string): OcrResult | null {
  const text = rawText.trim()
  if (!text) return null

  let price: number | null = null
  let priceStr = ''

  for (const pattern of PRICE_PATTERNS) {
    const match = text.match(pattern)
    if (match) {
      priceStr = match[1].replace(',', '.')
      price = parseFloat(priceStr)
      if (!isNaN(price) && price > 0) break
    }
  }

  if (!price || isNaN(price) || price <= 0) return null

  let name = text
    .replace(new RegExp(`[€$£]\\s*${priceStr.replace('.', '\\.')}`), '')
    .replace(new RegExp(`${priceStr.replace('.', '\\.')}\\s*[€$£]`), '')
    .replace(/price[:\s]*[€$£]?\s*\d+[.,]\d{2}/gi, '')
    .replace(/total[:\s]*[€$£]?\s*\d+[.,]\d{2}/gi, '')
    .replace(/[€$£]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  if (!name) {
    const lines = text.split('\n').filter(l => l.trim())
    name = lines.find(l => !l.match(PRICE_PATTERNS[0]) && !l.match(PRICE_PATTERNS[1]) && !l.match(/\d+[.,]\d{2}/))?.trim() || 'Unknown Product'
  }

  const lineCount = text.split('\n').filter(l => l.trim()).length
  const confidence: 'high' | 'medium' | 'low' = lineCount >= 2 && name.length > 3 ? 'high' : name.length > 3 ? 'medium' : 'low'

  return {
    name: name.substring(0, 60),
    price,
    rawText: text,
    confidence,
  }
}
