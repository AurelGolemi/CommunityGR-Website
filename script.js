    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });

    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });

    // Close mobile menu on window click
    window.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
      }
    });