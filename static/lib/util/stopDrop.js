// 禁用微信置顶下拉
export function stopDrop() {
  let lastY // 最后一次y坐标点
  document.body.addEventListener('touchstart', function (event) {
    lastY = event.targetTouches[0].clientY // 点击屏幕时记录最后一次Y度坐标。
  })
  document.body.addEventListener('touchmove', function (event) {
    const y = event.targetTouches[0].clientY
    const scrollTop = document.body.scrollTop  // 滚动条高度
    if (y >= lastY && scrollTop <= 10) { // 如果滚动条高度小于0，可以理解为到顶了，且是下拉情况下，阻止touchmove事件。
      lastY = y
      event.preventDefault()
    }
    lastY = y
  })
}
