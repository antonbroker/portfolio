
/* ------------------ AOS library ------------------ */
AOS.init({
    duration: 1000, 
    easing: 'ease-out-back',
    once: false,
    offset: 50,
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


document.querySelectorAll('.nav-list-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) 
        {
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' // Прокручиваем до начала элемента
            });
        }
    });
});


fetch('http://localhost:8000/php/server.php?page=index')
        .then(response => response.json())
        .then(data => {
            console.log(`views: ${data.views}`);
            document.getElementById('views-count').textContent = `views: ${data.views}`;
        })
        .catch(error => console.error('error:', error));


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const form = event.target;
    const formData = new FormData(form);

    fetch('./php/server.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Скрываем форму и показываем сообщение
            form.style.display = "none";
            const successMessage = document.getElementById("success-message");
            successMessage.style.display = "block";
            successMessage.innerHTML = `<p>${data.message}</p>`;
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});
