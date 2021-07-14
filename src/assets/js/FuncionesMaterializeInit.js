document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

function InicializarSelect() {
  var elems = document.getElementById('roles');
  var instances = M.FormSelect.init(elems, {});

  
  var elems = document.getElementById('ciudades');
  var instancess = M.FormSelect.init(elems, {});

}