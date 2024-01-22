document.getElementById('startButton').addEventListener('click', function() {
    createIcons();

    setTimeout(stopAnimation, 2000);
});

function createIcons() {
    const iconContainer = document.getElementById('iconContainer');

    for (let i = 0; i < 50; i++) {
        const icon = document.createElement('div'); 
        icon.classList.add('icon');
        
        
        const image = document.createElement('img');
        image.src = './src/files/icon_rain.png';
        image.alt = './src/files/icon_link.png'; 
        icon.appendChild(image);
        
        icon.style.left = `${Math.random() * 100}vw`;
        icon.style.animationDuration = `${Math.random() * 2 + 1}s`;
        iconContainer.appendChild(icon);

        icon.addEventListener('animationiteration', function() {
            icon.style.left = `${Math.random() * 100}vw`;
        });
    }
}

function stopAnimation() {
    const iconContainer = document.getElementById('iconContainer');

    iconContainer.classList.add('fadeOut');

    setTimeout(function() {
        while (iconContainer.firstChild) {
            iconContainer.removeChild(iconContainer.firstChild);
        }
        
        iconContainer.classList.remove('fadeOut');
    }, 1000); 
}