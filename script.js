// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Update active nav link
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('nav-active');
                    });
                    this.classList.add('nav-active');
                    
                    // Scroll to section
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Mobile menu toggle
        const menuBtn = document.querySelector('.menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Update active nav link on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 100) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('nav-active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('nav-active');
                }
            });
        });
        
        // Form submission
        // const contactForm = document.getElementById('contactForm');
        
        // contactForm.addEventListener('submit', function(e) {
        //     e.preventDefault();
            
        //     // Simple form validation
        //     const name = document.getElementById('name').value;
        //     const email = document.getElementById('email').value;
        //     const subject = document.getElementById('subject').value;
        //     const message = document.getElementById('message').value;
            
        //     if (name && email && subject && message) {
        //         // Here you would normally send the form data to a server
        //         alert('Thank you for your message! I will get back to you soon.');
        //         contactForm.reset();
        //     } else {
        //         alert('Please fill in all fields.');
        //     }
        // });
        
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
        
          const name = document.getElementById('name').value.trim();
          const email = document.getElementById('email').value.trim();
          const subject = document.getElementById('subject').value.trim();
          const message = document.getElementById('message').value.trim();
        
          if (name && email && subject && message) {
            const whatsappMessage = `Hello, I'm name${name}%0ASubject: ${subject}%0AEmail: ${email}%0AMessage: ${message}`;
            const phoneNumber = '919993931245'; // your WhatsApp number
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        
            window.open(whatsappURL, '_blank');
          } else {
            alert('Please fill in all fields.');
          }
        });



        // Create background particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const numberOfParticles = 30;
            
            for (let i = 0; i < numberOfParticles; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size between 2px and 5px
                const size = Math.random() * 3 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Random animation delay
                particle.style.animationDelay = `${Math.random() * 15}s`;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Initialize particles when page loads
        window.addEventListener('load', createParticles);
        
        // Fade in elements on scroll
        function checkFade() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                
                if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                    element.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', checkFade);
        window.addEventListener('load', checkFade);