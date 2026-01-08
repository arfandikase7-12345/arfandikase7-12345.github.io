// Efek scroll halus saat klik menu navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pesan sambutan saat halaman pertama kali dibuka
window.addEventListener('load', function() {
    alert('Selamat datang di Website Pemrograman Web Dasar UNPAM!');
});

// Efek hover tambahan pada kartu materi
document.querySelectorAll('.materi-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});