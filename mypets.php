<?php include "./header.html" ?><!--Se manda llamara la pagina de header mediante php-->

<script src="./js/mypets.js"> </script>
<link rel="stylesheet" href="/css/mypets.css">

<section><!--Toda la parte que contien lo relacionado a la catilla digital-->
  <div class="container-md">
    <div class="row"><!--renglón del titulo de la pagina-->
      <div class="col colminas"><!--columna del titulo de la pagina-->
        <h1 class="titmascos">MIS MASCOTA</h1>
      </div><!-- termina columna del titulo de la pagina-->
    </div><!--termina renglón del titulo de la pagina y boton de imprimir-->
  </div>
  <div class="container -md">
    <div class="mypetsback">
      <button onclick="window.location.href ='/newpet.php'"type="button" class="plus btn btn-primary" name="newpet" id= "newpet"><i class="fas fa-plus plus"></i> NUEVA MASCOTA</button>
    </div>
    <div class="table border">
      <table id="pets" class="table">
        <thead class ="titletable"><!--área donde estan los nombres de las columnas de la tabla-->
          <tr><!--fila donde estan los nombres de las columnas de la tabla-->
            <th data-field="petPic" id="petPic">FOTO</th>
            <th data-field="petName">NOMBRE</th>
            <th data-field="petVaccines" data-formatter="petButtonVaccines">VACUNAS</th>
            <th data-field="petCalendar" data-formatter="petCalendarButton">CALENDARIO</th>
            <th data-field="petOptions" data-formatter="petThreeBtns">OPCIONES</th>
          </tr><!-- termina fila donde estan los nombres de las columnas de la tabla-->

        </thead><!--termina área donde estan los nombres de las columnas de la tabla-->

      </table>
    </div>
  </div>



  </div><!--termian el contenedor de la cartilla digital-->
</section><!--Termina toda la seccion de la cartilla digital-->
<?php include "./footer.html" ?><!--Se manda llamara la pagina de footer mediante php-->
