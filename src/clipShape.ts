/**
 * 从canvas中挖去另一个图形，使底部透明显露出来
 * @param ctx CanvasRenderingContext2D
 * @param clipShape 直接用ctx渲染一个需要被挖走的图形即可
 */
export function clipShape(ctx: CanvasRenderingContext2D, clipShape: () => void) {
  ctx.beginPath()
  ctx.globalCompositeOperation = 'destination-out'
  clipShape()
  ctx.closePath()
  ctx.globalCompositeOperation = 'source-over'
}
