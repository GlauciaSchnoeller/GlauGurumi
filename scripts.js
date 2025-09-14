document.querySelectorAll('.coming-soon').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const floatingMessage = document.getElementById('floating-message');
        floatingMessage.textContent = "Em breve!";
        floatingMessage.classList.add('show');

        setTimeout(() => {
            floatingMessage.classList.remove('show');
        }, 3000);
    });
});
