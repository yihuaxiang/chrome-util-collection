
setTimeout(function(){
  Array.prototype.slice.call(document.querySelector("div.login-form").querySelectorAll("div.login-tab")).pop().dispatchEvent(new Event('click'))
},500)
