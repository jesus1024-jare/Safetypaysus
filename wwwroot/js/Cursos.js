document.addEventListener("DOMContentLoaded", function() {
    // Obtener el parámetro 'id' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');

    // Agregar log para verificar si se obtiene el ID
    console.log("ID del curso obtenido de la URL:", courseId);

    if (courseId) {
        // Si hay un ID en la URL, cargar los detalles del curso
        loadCourseDetails(courseId);
    } else {
        document.getElementById('error-message').textContent = "No se encontró el curso.";
    }
});

async function loadCourseDetails(id) {
    // Limpiar el mensaje de error
    document.getElementById('error-message').textContent = "";

    // Agregar log para verificar el ID pasado a la API
    console.log("ID pasado a la API:", id);

    try {
        // Llamar a la API para obtener los detalles del curso
        const response = await fetch(`http://localhost:7142/api/ControllerCursos/${id}`);
        
        if (!response.ok) {
            throw new Error("Error al obtener los datos del curso.");
        }

        const curso = await response.json();

        // Log para verificar la respuesta de la API
        console.log("Datos del curso:", curso);

        // Mostrar los detalles del curso en la página
        displayCourseDetails(curso);
    } catch (error) {
        document.getElementById('error-message').textContent = error.message;
        console.error("Error al cargar los detalles del curso:", error);
    }
}

function displayCourseDetails(curso) {
    document.getElementById('titulo').textContent = curso.titulo;
    document.getElementById('subtitulo').textContent = curso.subtitulo;
    document.getElementById('descripcion').textContent = curso.descripcion;
    document.getElementById('DurationDescription').textContent = curso.duracion_descripcion;
    document.getElementById('CredentialsDescription').textContent = curso.credenciales_descripcion;
    document.getElementById('CreditsDescription').textContent = curso.creditos_descripcion;
    document.getElementById('CompletionDescription').textContent = curso.completacion_descripcion;
    document.getElementById('precioBefore').textContent = curso.precio_before;
    document.getElementById('precioAfter').textContent = curso.precio_after;
}
