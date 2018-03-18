document.body.onclick = () => {
  let fileIndex = window.location.pathname.match(/(\d+)\.html/)[1];
  if (fileIndex < 5) fileIndex++;
  else fileIndex = 1;
  window.location.replace(`${fileIndex}.html`);
};
