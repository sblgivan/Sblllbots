document.addEventListener("DOMContentLoaded", function() {
    // Dynamic Welcome Message
    const welcomeMessage = document.querySelector('.welcome-message');
    const hours = new Date().getHours();
    const period = hours < 12 ? 'morning' : hours < 18 ? 'afternoon' : 'evening';
    welcomeMessage.textContent = `Good ${period}, welcome to SBL Smart Bots`;

    // Load Bots Dynamically (mock data)
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

    // FAB Button Toggle
    const fab = document.getElementById('fab');
    fab.addEventListener('click', function() {
        fab.classList.toggle('open');
    });

    // Check if Admin
    const loggedInUser = localStorage.getItem('loggedInUser');
    const isAdmin = (loggedInUser && loggedInUser.phone === '0740035058'); // Admin Phone Check

    if (isAdmin) {
        // Admin FAB Options
        setupAdminFabOptions();
    } else {
        // User FAB Options
        setupUserFabOptions();
    }

    // User FAB Options
    function setupUserFabOptions() {
        document.querySelector('.fab-options li:nth-child(1)').addEventListener('click', orderBot);
        document.querySelector('.fab-options li:nth-child(2)').addEventListener('click', aboutUs);
        document.querySelector('.fab-options li:nth-child(3)').addEventListener('click', openSettings);
    }

    // Admin FAB Options
    function setupAdminFabOptions() {
        document.querySelector('.fab-options li:nth-child(1)').addEventListener('click', viewOrderedBots);
        document.querySelector('.fab-options li:nth-child(2)').addEventListener('click', uploadNewBot);
        document.querySelector('.fab-options li:nth-child(3)').addEventListener('click', editUploadedBots);
    }

    // FAB Option: Order Bot (for Users)
    function orderBot() {
        const loggedIn = localStorage.getItem('loggedIn');
        if (!loggedIn) {
            window.location.href = "login.html";
        } else {
            window.location.href = "order.html";
        }
    }

    // FAB Option: About Us
    function aboutUs() {
        window.location.href = "aboutus.html";
    }

    // FAB Option: Open Settings Modal
    function openSettings() {
        document.getElementById('settingsModal').style.display = 'block';
    }

    // Close Modal
    function closeModal() {
        document.getElementById('settingsModal').style.display = 'none';
    }

    // Theme Switch
    function toggleTheme() {
        const app = document.getElementById('app');
        app.classList.toggle('dark-theme');
    }

    // Background Animation Toggle
    function toggleBackgroundAnimation() {
        document.body.classList.toggle('animate-background');
    }

    // Bind events for Settings modal
    document.getElementById('themeSwitch').addEventListener('change', toggleTheme);
    document.getElementById('backgroundSwitch').addEventListener('change', toggleBackgroundAnimation);
    document.getElementById('settingsModal').querySelector('button').addEventListener('click', closeModal);

    // Admin FAB Option: View Ordered Bots
    function viewOrderedBots() {
        window.location.href = "orderedBots.html"; // Redirect to the ordered bots page
    }

    // Admin FAB Option: Upload New Bot
    function uploadNewBot() {
        window.location.href = "uploadBot.html"; // Redirect to the upload bot page
    }

    // Admin FAB Option: Edit Uploaded Bots
    function editUploadedBots() {
        window.location.href = "editBots.html"; // Redirect to the edit bots page
    }

});
    
