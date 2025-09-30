// Mock data for demonstration
const mockData = {
    weather: [
        { type: 'rain', message: 'Heavy rainfall expected tomorrow' },
        { type: 'sun', message: 'Sunny weather perfect for harvesting' }
    ],
    activities: [
        { date: 'Sep 29', activity: 'Applied fertilizer to rice field' },
        { date: 'Sep 28', activity: 'Irrigation done' },
        { date: 'Sep 27', activity: 'Pest control measures implemented' }
    ],
    tasks: [
        { date: 'Oct 2', task: 'Pest inspection due' },
        { date: 'Oct 5', task: 'Apply second dose of fertilizer' },
        { date: 'Oct 7', task: 'Harvest vegetables' }
    ]
};

// Language toggle
let currentLanguage = 'en';
const translations = {
    en: {
        login: 'Login',
        dashboard: 'Dashboard',
        profile: 'Farm Profile',
        activities: 'Activities',
        advisory: 'Advisory',
        logout: 'Logout'
    },
    ml: {
        login: 'ലോഗിൻ',
        dashboard: 'ഡാഷ്ബോർഡ്',
        profile: 'ഫാം പ്രൊഫൈൽ',
        activities: 'പ്രവർത്തനങ്ങൾ',
        advisory: 'ഉപദേശം',
        logout: 'ലോഗൗട്ട്'
    }
};

// Login functionality
function login() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    if (phoneNumber && password) {
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('dashboardSection').classList.remove('hidden');
    } else {
        alert('Please enter both phone number and password');
    }
}

// Logout functionality
function logout() {
    document.getElementById('loginSection').classList.remove('hidden');
    document.getElementById('dashboardSection').classList.add('hidden');
    document.getElementById('profileSection').classList.add('hidden');
}

// Mock activities data
const mockActivities = [
    { date: 'Sep 30', type: 'irrigation', activity: 'Irrigated rice field - 2 hours' },
    { date: 'Sep 29', type: 'fertilizer', activity: 'Applied NPK fertilizer to vegetable plot' },
    { date: 'Sep 28', type: 'pest', activity: 'Sprayed organic pesticide on tomato plants' },
    { date: 'Sep 27', type: 'harvest', activity: 'Harvested 100kg rice' },
    { date: 'Sep 26', type: 'irrigation', activity: 'Checked drip irrigation system' }
];

// Navigation functionality
function showSection(section) {
    // Hide all sections
    document.getElementById('dashboardSection').classList.add('hidden');
    document.getElementById('profileSection').classList.add('hidden');

    // Show selected section
    if (section === 'dashboard') {
        document.getElementById('dashboardSection').classList.remove('hidden');
    } else if (section === 'profile') {
        document.getElementById('profileSection').classList.remove('hidden');
    }

    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Quick action functions
function logActivity() {
    const activity = prompt('Enter your activity:');
    if (activity) {
        const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const activityList = document.querySelector('.activity-list');
        const newActivity = document.createElement('div');
        newActivity.className = 'activity-item';
        newActivity.innerHTML = `
            <span class="date">${date}</span>
            <span class="activity">${activity}</span>
        `;
        activityList.insertBefore(newActivity, activityList.firstChild);
    }
}

function viewAdvisory() {
    alert('Advisory System: Based on current weather and crop conditions, it\'s recommended to monitor for pest activity and ensure proper irrigation.');
}

function checkPrices() {
    alert('Market Prices (Demo):\nRice: ₹35/kg\nVegetables:\n- Tomato: ₹40/kg\n- Cucumber: ₹25/kg\n- Brinjal: ₹30/kg');
}

// Language toggle functionality
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ml' : 'en';
    const toggleButton = document.querySelector('.language-toggle button');
    toggleButton.textContent = currentLanguage === 'en' ? 'Switch to മലയാളം' : 'Switch to English';
    
    // Update UI text
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[currentLanguage][key];
    });
}

// Initialize weather alerts
function initializeWeatherAlerts() {
    const weatherAlert = document.querySelector('.weather-alert');
    const randomWeather = mockData.weather[Math.floor(Math.random() * mockData.weather.length)];
    weatherAlert.innerHTML = `
        <i class="fas fa-cloud-rain"></i>
        <p>${randomWeather.message}</p>
    `;
}
