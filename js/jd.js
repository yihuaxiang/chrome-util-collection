
setTimeout(function(){
  Array.prototype.slice.call(document.querySelector("div.login-form").querySelectorAll("div.login-tab")).pop().dispatchEvent(new Event('click'))
  console.info('已关闭京东二维码登陆')
},500)
