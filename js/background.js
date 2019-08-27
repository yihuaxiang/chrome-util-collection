chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  console.log('inputChanged: ' + text);
  if(!text) return;
  suggest([
    {content: '阿里内外 ' + text, description: '通过阿里内外搜索' + text}
  ]);
});


// 当用户接收关键字建议时触发
chrome.omnibox.onInputEntered.addListener((text) => {
  console.log('inputEntered: ' + text);
  if(!text) return;
  var url = '';
  if(text.startsWith('阿里内外')){
    url = `https://work.alibaba-inc.com/nwpipe/search?type=all&keywords=${text.replace('阿里内外','')}`
  }
  openUrlCurrentTab(url);
});

// 获取当前选项卡ID
function getCurrentTabId(callback)
{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
  {
    if(callback) callback(tabs.length ? tabs[0].id: null);
  });
}

// 当前标签打开某个链接
function openUrlCurrentTab(url)
{
  getCurrentTabId(tabId => {
    chrome.tabs.update(tabId, {url: url});
  })
}
