document.addEventListener('DOMContentLoaded', function() {
  // Sidebar navigation active state
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Logout button functionality
  const logoutBtn = document.querySelector('.nav-links button');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      window.location.href = 'login.html';
    });
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
        });