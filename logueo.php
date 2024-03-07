<?php
    require 'conexion.php';
if (isset($_POST['usuario'])) {
    session_start();
    $usuario = $_POST['usuario'];
    $password = $_POST['contraseña'];
    $password_sha1 = sha1($password);

    $query = "SELECT COUNT(*) as contar FROM usuario WHERE usuario = '$usuario' AND contrasena = '$password_sha1'";

    $consulta = mysqli_query($con, $query);

    $array = mysqli_fetch_array($consulta);

    if ($array["contar"]>0) {
        $_SESSION['usuario'] = $usuario;
        header('Location: https://www.chedraui.com.mx');
    } else {
        echo "USUARIO INCORRECTO";
    }
}

?>
