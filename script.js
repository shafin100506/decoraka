 // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95) !important';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.9) !important';
        }
    });

    // Modal animation
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('show.bs.modal', function() {
            const modalContent = this.querySelector('.modal-content');
            modalContent.classList.add('fade-in');
        });
        
        modal.addEventListener('hidden.bs.modal', function() {
            const modalContent = this.querySelector('.modal-content');
            modalContent.classList.remove('fade-in');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
