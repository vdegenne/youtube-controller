
function injectScript(url, container, type = 'module') {
  const script = document.createElement('script');
  script.setAttribute('type', type);
  script.setAttribute('src', url);
  container.appendChild(script);
}

injectScript(
  chrome.runtime.getURL('content.js'),
  document.body
)