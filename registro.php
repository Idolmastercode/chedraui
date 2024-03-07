<?php
    require 'conexion.php';

if (isset($_POST['usuario'])) {
    session_start();
    $usuario = $_POST['usuario'];
    $correo = $_POST['email'];
    $password = $_POST['contraseña'];
    $password_sha1 = sha1($password);

    $query = "INSERT INTO Usuario (usuario, contrasena, correo) VALUES ('$usuario','$password_sha1','$correo')";
    $consulta = mysqli_query($con, $query);


    if ($consulta) {
        $_SESSION['usuario'] = $usuario;
        header('Location: login.html');
    } else {
        echo "ERROR";
    }
}

?>
