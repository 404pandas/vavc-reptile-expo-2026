document.addEventListener('DOMContentLoaded', function () {
  // Materialize sidenav init
  const sidenavElems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenavElems);

  // Tooltips
  const tooltips = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(tooltips);

  // Highlight active nav link
  const path = window.location.pathname;
  document.querySelectorAll('nav ul a, .sidenav a').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.style.color = '#f9a825';
    }
  });
});
