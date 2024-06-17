const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');

noButton.addEventListener('mouseover', function() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomX = Math.random() * (windowWidth - 150);
    const randomY = Math.random() * (windowHeight - 50);
    
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

yesButton.addEventListener('click', function() {
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = `
        
        <p> Bubu deu na ta</p>
    `;

    document.body.appendChild(message);

    setTimeout(function() {
        message.remove();
    }, 5000); 
});
