import type { DrawQuadCurve } from './types'

export function drawQuadCurve(options: DrawQuadCurve) {
  const { canvas, ctx, startX, startY, x1, y1, x2, y2, lineWidth, borderRadialGradient, fillRadialGradient, isClosed, isFill, setCustom } = options
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

  _ctx.beginPath()
  _ctx.moveTo(startX, startY)
  _ctx.quadraticCurveTo(x1, y1, x2, y2)

  if (isFill) {
    if (isClosed)
      _ctx.closePath()
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
    if (isClosed)
      _ctx.closePath()
    if (setCustom)
      setCustom(_ctx)
    _ctx.stroke()
  }
  return _canvas
}
