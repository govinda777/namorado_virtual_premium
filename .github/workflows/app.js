// Namorado Virtual Premium - JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        
        // Animate hamburger icon
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (mobileMenu.classList.contains('hidden')) {
                span.style.transform = 'rotate(0deg)';
                span.style.opacity = '1';
            } else {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            }
        });
    });

    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.style.transform = 'rotate(0deg)';
                span.style.opacity = '1';
            });
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate user counter
    const userCountElement = document.getElementById('userCount');
    let currentCount = 12847;
    
    function updateUserCount() {
        currentCount += Math.floor(Math.random() * 3) + 1;
        userCountElement.textContent = currentCount.toLocaleString('pt-BR');
    }
    
    // Update counter every 5 seconds
    setInterval(updateUserCount, 5000);

    // CTA Button functionality with loading animation
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add loading state
            this.classList.add('loading');
            const originalText = this.textContent;
            this.textContent = '';
            
            // Simulate loading
            setTimeout(() => {
                this.classList.remove('loading');
                this.textContent = originalText;
                
                // Show success alert
                alert('Redirecionando para pagamento... 💕\n\nVocê está prestes a encontrar o amor perfeito!');
            }, 2000);
        });
    });

    // Plan button functionality
    const planButtons = document.querySelectorAll('.plan-button');
    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planName = this.textContent.replace('ESCOLHER ', '');
            const card = this.closest('.pricing-card');
            const price = card.querySelector('.amount').textContent;
            
            // Add loading state
            this.classList.add('loading');
            const originalText = this.textContent;
            this.textContent = '';
            
            setTimeout(() => {
                this.classList.remove('loading');
                this.textContent = originalText;
                
                alert(`Plano ${planName} selecionado! 💖\n\nValor: R$ ${price}/mês\nRedirecionando para pagamento...`);
            }, 1500);
        });
    });

    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // Special Offer Modal
    const specialOfferModal = document.getElementById('specialOfferModal');
    const modalClose = document.getElementById('modalClose');
    
    // Show modal after 10 seconds
    setTimeout(() => {
        specialOfferModal.classList.remove('hidden');
        
        // Add entrance animation
        const modalContent = specialOfferModal.querySelector('.modal-content');
        modalContent.style.animation = 'modalSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    }, 10000);
    
    // Close modal functionality
    modalClose.addEventListener('click', function() {
        specialOfferModal.classList.add('hidden');
    });
    
    // Close modal when clicking outside
    specialOfferModal.addEventListener('click', function(e) {
        if (e.target === specialOfferModal) {
            specialOfferModal.classList.add('hidden');
        }
    });
    
    // Modal CTA button
    const modalCta = document.querySelector('.modal-cta');
    modalCta.addEventListener('click', function() {
        this.classList.add('loading');
        const originalText = this.textContent;
        this.textContent = '';
        
        setTimeout(() => {
            this.classList.remove('loading');
            this.textContent = originalText;
            specialOfferModal.classList.add('hidden');
            
            alert('Parabéns! 🎉\n\nDesconto de 50% aplicado!\nRedirecionando para pagamento com desconto...');
        }, 1800);
    });

    // Scroll-based animations
    function animateOnScroll() {
        const elements = document.querySelectorAll('.benefit-card, .pricing-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize scroll animations
    const scrollElements = document.querySelectorAll('.benefit-card, .pricing-card, .testimonial-card');
    scrollElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add loading states to all buttons
    const allButtons = document.querySelectorAll('button:not(.faq-question):not(.modal-close):not(.mobile-menu-btn)');
    allButtons.forEach(button => {
        if (!button.classList.contains('cta-button') && !button.classList.contains('plan-button') && !button.classList.contains('modal-cta')) {
            button.addEventListener('click', function() {
                if (!this.classList.contains('loading')) {
                    this.classList.add('loading');
                    const originalText = this.textContent;
                    this.textContent = '';
                    
                    setTimeout(() => {
                        this.classList.remove('loading');
                        this.textContent = originalText;
                        alert('Funcionalidade em desenvolvimento! 💕\n\nEm breve você poderá acessar esta opção.');
                    }, 1000);
                }
            });
        }
    });

    // Keyboard accessibility for modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !specialOfferModal.classList.contains('hidden')) {
            specialOfferModal.classList.add('hidden');
        }
    });

    // Prevent scroll when modal is open
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.classList.contains('hidden')) {
                document.body.style.overflow = 'auto';
            } else {
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    observer.observe(specialOfferModal, { attributes: true, attributeFilter: ['class'] });

    // Heart icon click interaction
    const heartIcon = document.querySelector('.heart-icon');
    if (heartIcon) {
        heartIcon.addEventListener('click', function() {
            this.style.animation = 'none';
            this.style.transform = 'scale(1.3)';
            
            // Create floating hearts
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createFloatingHeart(this);
                }, i * 200);
            }
            
            setTimeout(() => {
                this.style.animation = 'heartbeat 2s ease-in-out infinite';
                this.style.transform = 'scale(1)';
            }, 1000);
        });
    }

    function createFloatingHeart(element) {
        const floatingHeart = document.createElement('div');
        floatingHeart.textContent = '💖';
        floatingHeart.style.position = 'absolute';
        floatingHeart.style.fontSize = '24px';
        floatingHeart.style.pointerEvents = 'none';
        floatingHeart.style.zIndex = '1000';
        
        const rect = element.getBoundingClientRect();
        floatingHeart.style.left = (rect.left + Math.random() * rect.width) + 'px';
        floatingHeart.style.top = (rect.top + window.scrollY) + 'px';
        
        document.body.appendChild(floatingHeart);
        
        // Animate floating heart
        let position = 0;
        const animateHeart = () => {
            position -= 2;
            floatingHeart.style.transform = `translateY(${position}px) scale(${1 + position * -0.01})`;
            floatingHeart.style.opacity = Math.max(0, 1 + position * 0.02);
            
            if (position > -100) {
                requestAnimationFrame(animateHeart);
            } else {
                document.body.removeChild(floatingHeart);
            }
        };
        
        requestAnimationFrame(animateHeart);
    }

    // Console easter egg
    console.log(`
    💕 Namorado Virtual Premium 💕
    
    Olá, desenvolvedora curiosa! 
    
    Você descobriu nosso segredo... 
    Este site foi feito com muito amor (e código)!
    
    Que tal um desconto especial? 
    Use o código: DEVLOVE50 
    
    💖 Feito com amor para encontrar o amor! 💖
    `);

    // Performance optimization: lazy load animations
    const lazyAnimationElements = document.querySelectorAll('.benefit-card, .testimonial-card');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                animationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    lazyAnimationElements.forEach(element => {
        animationObserver.observe(element);
    });

    // Add fadeInUp animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// Service Worker for better performance (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker could be implemented here for caching
        console.log('💕 Site otimizado para a melhor experiência de amor virtual!');
    });
}