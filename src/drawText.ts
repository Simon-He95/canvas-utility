import type { DrawText } from './types'

export function drawText(options: DrawText) {
  const { isFill, text, textAlign, textBaseline, font = '14', direction, radialGradient, canvas, ctx, setCustom } = options
  let position = options.position
  let color = options.color
  if (!position || !position.length) {
    const fontSize = +(font.match(/([0-9]+)/)?.[0] || '14')
    position = [0, fontSize]
  }
  const _canvas = canvas || document.createElement('canvas')
  const _ctx = ctx || _canvas.getContext('2d')!
  if (radialGradient)
    color = typeof radialGradient === 'function' ? radialGradient(_ctx) : radialGradient

  if (direction)
    _ctx.direction = direction
  if (font)
    _ctx.font = font
  if (textAlign)
    _ctx.textAlign = textAlign
  if (textBaseline)
    _ctx.textBaseline = textBaseline
  const [x, y] = position
  if (isFill) {
    if (color)
      _ctx.fillStyle = color
    if (setCustom)
      setCustom(_ctx)
    _ctx.fillText(text, x, y)
  }
  else {
    if (color)
      _ctx.strokeStyle = color
    if (setCustom)
      setCustom(_ctx)
    _ctx.strokeText(text, x, y)
  }
  return _canvas
}
