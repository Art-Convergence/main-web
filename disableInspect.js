// Disable right-click on the page
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Right-click is disabled on this page.");
  });
  
  // Disable certain key combinations (like F12, Ctrl+Shift+I, etc.)
  document.addEventListener('keydown', function (e) {
    if (e.key === "F12") {
      e.preventDefault();
      alert("Inspect Element is disabled.");
    }
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault();
      alert("Inspect Element is disabled.");
    }
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
      alert("View Page Source is disabled.");
    }
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
      e.preventDefault();
      alert("Console is disabled.");
    }
  });
  
  // Disable text selection
  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });
  
  // Disable drag and drop
  document.addEventListener('dragstart', function (e) {
    e.preventDefault();
  });
  