document.addEventListener("DOMContentLoaded", function() {
    // Dynamic Welcome Message
    const welcomeMessage = document.querySelector('.welcome-message');
    const hours = new Date().getHours();
    const period = hours < 12 ? 'morning' : hours < 18 ? 'afternoon' : 'evening';
    welcomeMessage.textContent = `Good ${period}, welcome to SBL Smart Bots`;

    // Load Bots Dynamically (from mock data or API)
    const botList = document.getElementById('botList');
    const bots = [
        { name: 'Bot Alpha', description: 'This is Bot Alpha.', price: '20', images: ['img1.jpg', 'img2.jpg', 'img3.jpg'] },
        { name: 'Bot Beta', description: 'This is Bot Beta.', price: '15', images: ['img4.jpg', 'img5.jpg', 'img6.jpg'] }
    ];

    bots.forEach((bot, index) => {
        const botItem = document.createElement('div');
        botItem.classList.add('bot-item');
        botItem.innerHTML = `
            <h3 class="bot-title">${bot.name}</h3>
            <p>${bot.description}</p>
            <div class="image-card">
                <img src="${bot.images[0]}" alt="${bot.name}">
            </div>
            <p>${bot.description}</p>
        `;
        botList.appendChild(botItem);
    });

    // FAB Button Functionality
    document.getElementById('fab').addEventListener('click', function() {
        this.classList.toggle('open');
    });

    // Settings Modal
    function openSettings() {
        document.getElementById('settingsModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('settingsModal').style.display = 'none';
    }

    // Theme Switching
    function toggleTheme() {
        const app = document.getElementById('app');
        app.classList.toggle('dark-theme');
    }

    // Background Animation Toggle
    function toggleBackgroundAnimation() {
        document.body.classList.toggle('animate-background');
    }
});
                          
