document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if(icon) {
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
        });
    });

    // Scroll Animations using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once it's revealed
            }
        });
    }, revealOptions);
    
    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Track & Trace Simulation
    const trackBtn = document.getElementById('track-btn');
    const trackInput = document.getElementById('track-input');
    const trackResult = document.getElementById('track-result');

    if(trackBtn) {
        trackBtn.addEventListener('click', () => {
            const val = trackInput.value.trim();
            if(!val) {
                trackResult.style.display = 'block';
                trackResult.style.color = '#ff4757';
                trackResult.innerHTML = '<i class="bx bx-error-circle"></i> Vui lòng nhập mã để tra cứu.';
                return;
            }
            
            trackBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Đang tra cứu...';
            
            setTimeout(() => {
                trackBtn.innerHTML = 'Tra cứu';
                trackResult.style.display = 'block';
                trackResult.style.color = '#00e5ff';
                trackResult.innerHTML = `<i class="bx bx-check-circle"></i> Lô hàng <strong>${val}</strong> đang trong quá trình vận chuyển. Cập nhật vị trí gần nhất: Cảng Cát Lái.`;
            }, 1200);
        });
    }
});

// Modal Functions
function openCV(imageSrc, name) {
    const modal = document.getElementById('cvModal');
    const modalImg = document.getElementById('modalImg');
    const modalName = document.getElementById('modalName');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalName.innerText = "Hồ sơ năng lực: " + name;
}

function closeCV() {
    document.getElementById('cvModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('cvModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
