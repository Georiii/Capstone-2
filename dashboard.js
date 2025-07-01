document.addEventListener('DOMContentLoaded', function() {
  // Sidebar navigation active state
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Logout button functionality
  const logoutBtn = document.querySelector('.logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      window.location.href = 'login.html';
    });
  }

  // Role dropdown updates role text for each user card
  document.querySelectorAll('.roleEdit').forEach(function(select) {
    select.addEventListener('change', function() {
      const roleTextId = this.getAttribute('data-role-text');
      const roleText = document.getElementById(roleTextId);
      if (roleText) {
        roleText.textContent = this.options[this.selectedIndex].text;
      }
    });
  });

  // Search/filter function for users
  const searchInput = document.querySelector('.search-bar input[type="text"]');
  const roleFilter = document.querySelector('.user-filters select:nth-of-type(1)');
  const statusFilter = document.querySelector('.user-filters select:nth-of-type(2)');
  const userCards = document.querySelectorAll('.user-surveillance-card');

  function filterUsers() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const selectedRole = roleFilter ? roleFilter.value : '';
    const selectedStatus = statusFilter ? statusFilter.value : '';

    userCards.forEach(card => {
      const name = card.querySelector('.user-name');
      const roleSelect = card.querySelector('.roleEdit');
      const status = card.getAttribute('data-status') || 'active';

      let matches = true;

      // Search by name
      if (query && (!name || !name.textContent.toLowerCase().includes(query))) {
        matches = false;
      }

      // Filter by role
      if (selectedRole && roleSelect && roleSelect.value !== selectedRole) {
        matches = false;
      }

      // Filter by status
      if (selectedStatus && status !== selectedStatus) {
        matches = false;
      }

      card.style.display = matches ? '' : 'none';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterUsers);
  }
  if (roleFilter) {
    roleFilter.addEventListener('change', filterUsers);
  }
  if (statusFilter) {
    statusFilter.addEventListener('change', filterUsers);
  }
});