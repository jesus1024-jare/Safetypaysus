document.getElementById('Boton').addEventListener('click', function(event) {
    event.preventDefault();

    fetch('http://localhost:7142/api/User/cerrarsesion', {  // Asegúrate que la URL es correcta
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (!res.ok) {
            return res.text().then(text => {
                throw new Error(`Error en el cierre de sesión: ${res.status} ${text}`);
            });
        }
        return res.json();
    })
    .then(data => {
        console.log('Sesión cerrada correctamente:', data);
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/Home/Login";  // Redirigir a la página de inicio de sesión
    })
    .catch(error => {
        console.error('Error al cerrar la sesión:', error);
    });
});
