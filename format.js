(function() {
  try {
    var data = JSON.parse(document.body.textContent);
  } catch (error) {
    alert(error);
    return;
  }
  var css = "body { white-space: pre; font-family: monospace; }";
  var tag = document.createElement("style");
  tag.type = "text/css";
  document.head.appendChild(tag);
  tag.appendChild(document.createTextNode(css));

  document.body.innerHTML = "";
  document.body.appendChild(
    document.createTextNode(JSON.stringify(data, null, 4))
  );
})();
