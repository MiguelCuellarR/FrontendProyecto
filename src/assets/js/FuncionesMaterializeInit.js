document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

function InicializarSelect() {
  var elems = document.getElementById('roles');
  var instances = M.FormSelect.init(elems, {});

  
  var elems = document.getElementById('ciudades');
  var instancess = M.FormSelect.init(elems, {});

   
  var elems = document.getElementById('paises');
  var instancess = M.FormSelect.init(elems, {});

  var elems = document.getElementById('proyectos');
  var instances = M.FormSelect.init(elems, {});

  
  var elems = document.getElementById('bloques');
  var instancess = M.FormSelect.init(elems, {});

   
  var elems = document.getElementById('inmuebles');
  var instancess = M.FormSelect.init(elems, {});

  var elems = document.getElementById('clientes');
  var instances = M.FormSelect.init(elems, {});

  
  var elems = document.getElementById('solicitudes');
  var instancess = M.FormSelect.init(elems, {});

   
  var elems = document.getElementById('estados');
  var instancess = M.FormSelect.init(elems, {});
}