console.log("JavaScript connected!");

/* ------------------ AOS library ------------------ */
AOS.init({
    duration: 1000, 
    easing: 'ease-out-back',
    once: false,
    offset: 50,
});


document.querySelector('.read-more-btn').addEventListener('click', function () {
    const moreText = document.querySelector('.more-text');
    const aboutSection = document.querySelector('#about'); // Выбираем секцию About

    if (moreText.style.display === 'none' || !moreText.style.display) {
        moreText.style.display = 'inline';
        this.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        this.textContent = 'Read More';

        // Прокрутка к началу секции About
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
});

document.querySelector('.logo').addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector('#home'); // id="back"

    if (targetElement) {
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
        });
    }
});

document.querySelector('.logo').addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector('#home'); // id="home"

    if (targetElement) {
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
        });
    }
});

document.querySelectorAll('.nav-list-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1); 
        if (['about', 'skills', 'projects'].includes(targetId)) 
        { 
            e.preventDefault(); // Отменить стандартное поведение
            const targetElement = document.getElementById(targetId);
            if (targetElement) 
            {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            
            document.getElementById('form').style.display = 'none';
            document.getElementById('success-message').style.display = 'block';
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message || 'There was an issue sending your message.'}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});