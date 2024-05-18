document.addEventListener('DOMContentLoaded', function() {
    // Sidenav Initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
  });