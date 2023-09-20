document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const pass = document.getElementById("pass");
    const passConfirma = document.getElementById("passConfirma");

    formulario.addEventListener("submit", function(event) {
        let isValid = true;

        if (passConfirma.value.trim() === "") {
            mostrarError(passConfirma, "Debe confirmar la contraseña");
            isValid = false;
        } else if (pass.value !== passConfirma.value) {
            mostrarError(passConfirma, "Las contraseñas no coinciden");
            isValid = false;
        } else {
            ocultarError(passConfirma);
        }

        if (!isValid) {
            event.preventDefault(); // Evita que se envíe el formulario si hay errores
        }
    });

    function mostrarError(elemento, mensaje) {
        const p = elemento.nextElementSibling;
        p.textContent = mensaje;
        p.style.color = "red";
    }

    function ocultarError(elemento) {
        const p = elemento.nextElementSibling;
        p.textContent = "";
    }
});