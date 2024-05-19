document.addEventListener('DOMContentLoaded', function () {
  // Sidenav Initialisation
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // Modal initialisation 
  let confirmModal = document.querySelectorAll('.modal');
  M.Modal.init(confirmModal);

  // Datepicker initialisation 
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {
      done: "Select"
    }
  });

  // Select initialisation 
  let selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

  // Collapsible initialisation 
  let collapsible = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsible);
});