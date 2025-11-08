document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginStatus = document.getElementById('login-status');

    // Credenciales de prueba (SIMULADAS)
    const VALID_USER = 'jairo';
    const VALID_PASS = '12345678';

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener valores de los campos
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Ocultar mensaje anterior y limpiar estilos
        loginStatus.classList.add('hidden');
        loginStatus.classList.remove('error-message', 'success-message');
        loginStatus.textContent = '';
        
        // Simulación de validación (usando setTimeout para simular la latencia de red)
        setTimeout(() => {
            if (username === VALID_USER && password === VALID_PASS) {
                // ACCESO CONCEDIDO
                loginStatus.textContent = "ACCESO CONCEDIDO. Redireccionando...";
                loginStatus.classList.add('success-message');
                loginStatus.classList.remove('hidden');
                
                // Redirección simulada a la página de cursos (en un entorno real, sería un token)
                setTimeout(() => {
                    window.location.href = '../index.html';
                }, 1500); 

            } else {
                // ACCESO DENEGADO
                loginStatus.textContent = "AUTENTICACIÓN FALLIDA. Credenciales de sistema inválidas.";
                loginStatus.classList.add('error-message');
                loginStatus.classList.remove('hidden');

                // Limpiar solo la contraseña después del error
                passwordInput.value = '';
            }
        }, 1000); // Latencia de 1 segundo para simular carga
    });
});