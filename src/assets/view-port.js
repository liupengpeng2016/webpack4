(function () {
  function setHtmlFont () {
    var clientW = document.documentElement.clientWidth
    document.querySelector('html').style.fontSize = clientW + 'px'
  }
  // 设置body字体
  var bodyStyle = document.createElement('style')
  bodyStyle.innerText = 'body {font-size: medium;}'
  document.querySelector('head').appendChild(bodyStyle)
  // 设置html字体
  setHtmlFont()
  window.addEventListener('resize', setHtmlFont)
})()
