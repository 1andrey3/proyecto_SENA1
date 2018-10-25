<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.18/css/jquery.dataTables.min.css"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://localhost/proyecto_SENA/assets/css/imagen.css">
    <title>Base de datos</title>
</head>
<body>
    <div class="container">
    <button id="cambiar">cambiar color</button>
        <table id="la_tabla" class="table table-bordered table-hover  table-striped">
            <thead class="fondo_gris" id="fonto">
                <th>Número de Documento</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Email</th>
                <th>Rol</th>
            </thead>
            <?php
            for($cont=0; $cont < count($users) ; $cont++){
                echo "<tr> <td>".$users[$cont]->No_documento."</td>";   
                echo "<td>".$users[$cont]->Nombres."</td>";
                echo "<td>".$users[$cont]->Apellidos."</td>";  
                echo "<td>".$users[$cont]->Email."</td>";  
                echo "<td>".$users[$cont]->rol."</td></tr>";
            }
            ?>
        </table>
    </div>
    <script  src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script  src="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script  src="https://cdn.datatables.net/1.10.18/js/jquery.dataTables.min.js"></script>

    <script>
        $('#la_tabla').DataTable();
        $('#cambiar').click(function(){
            var y = $('#fonto');
            var x = $('#fonto').attr('class');
            console.log(x)
            if (x == 'fondo_gris') {
                y.attr('class', 'fondo_azul')
            } else {
                y.attr('class', 'fondo_gris')
            }
        });
    </script>
</body>
</html>