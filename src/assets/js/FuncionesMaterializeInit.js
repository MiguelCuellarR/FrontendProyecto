document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  function InicializarSelect(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.getElementById('roles');
      var instances = M.FormSelect.init(elems, {});
    });
  }