document.addEventListener('DOMContentLoaded', function() {
    // side nav
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // date picker
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });

    // category select
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsibles
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
  });