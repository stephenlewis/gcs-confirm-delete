var navTop = document.getElementById("nav-top");

var observer = new WebKitMutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    for(var i = 0; i < mutation.addedNodes.length; i++) {
      var els = mutation.addedNodes[i].querySelectorAll(".delete-files");

      if(els.length == 1) {
        replaceDeleteButton(els[0]);
      }
    }
  });
});
observer.observe(document, { subtree: true, childList: true });

function replaceDeleteButton(originalDeleteButton) {
  var newDeleteButton = originalDeleteButton.cloneNode(true);
  originalDeleteButton.parentNode.insertBefore(newDeleteButton, originalDeleteButton);

  originalDeleteButton.style.display = "none";

  newDeleteButton.addEventListener('click', function() {
    if(confirm("Are you sure you want to delete the selected item(s)?")) {
      originalDeleteButton.click();
    }
  });
}