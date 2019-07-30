document.addEventListener("DOMContentLoaded", function() {
  yall({
    observeChanges: true,
    lazyClass: 'media-lazy',
    events: {
      load: event => {
        if (event.target.nodeName == "IMG" && !event.target.classList.contains("media-lazy")) {
          event.target.classList.add("media-loaded");
        }
      }
    }
  });
});
