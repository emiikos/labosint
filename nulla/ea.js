window.addEventListener("pageshow", function(event) {
  if (event.persisted) {
    c.restore();
  }
});
