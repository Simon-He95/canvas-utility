import type { DrawRoundRect } from './types'

export function drawRoundRect(options: DrawRoundRect) {
  const { canvas, ctx, x, y, width, height, lineWidth, radii, borderRadialGradient, fillRadialGradient, isFill, setCustom } = options
  let color = options.color
  let fillColor = options.fillColor
  const _canvas = canvas || document.createElement('canvas')
  const _ctx = ctx || _canvas.getContext('2d')!
  if (borderRadialGradient)
    color = typeof borderRadialGradient === 'function' ? borderRadialGradient(_ctx) : borderRadialGradient
  if (fillRadialGradient)
    fillColor = typeof fillRadialGradient === 'function' ? fillRadialGradient(_ctx) : fillRadialGradient
  if (lineWidth)
    _ctx.lineWidth = lineWidth

  _ctx.beginPath();
  (_ctx as any).roundRect(x, y, width, height, radii)

  if (isFill) {
    if (fillColor)
      _ctx.fillStyle = fillColor
    if (setCustom)
      setCustom(_ctx)
    _ctx.fill()
    if (color) {
      _ctx.strokeStyle = color
      _ctx.stroke()
    }
  }
  else {
    if (color)
      _ctx.strokeStyle = color
    if (setCustom)
      setCustom(_ctx)
    _ctx.stroke()
  }
  return _canvas
}
