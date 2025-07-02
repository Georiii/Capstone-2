document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('.login-form');
  const usernameInput = loginForm.querySelector('input[type="text"]');
  const passwordInput = document.getElementById('passwordInput');

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (usernameInput.value && passwordInput.value) {
      window.location.href = 'dashboard.html';
    }
  });
});

// File: login.js
    const passwordInput = document.getElementById('passwordInput');
    const togglePassword = document.getElementById('togglePassword');

    passwordInput.addEventListener('input', function() {
      if (passwordInput.value) {
        togglePassword.classList.add('visible');
      } else {
        togglePassword.classList.remove('visible');
        passwordInput.type = 'password';
      }
    });

    togglePassword.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    });