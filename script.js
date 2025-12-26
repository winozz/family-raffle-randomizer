// Static attendees data with color team assignments
const staticAttendeesData = [
    { family: 'ANAK AT APO NI YOLLY', name: 'Shirly', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI YOLLY', name: 'Rhapy', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI YOLLY', name: 'Ashley', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI YOLLY', name: 'Basty', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI YOLLY', name: 'Jane', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI YOLLY', name: 'Marc', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI YOLLY', name: 'Lucy', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI YOLLY', name: 'Zoe', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI CORIT', name: 'Judith', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI CORIT', name: 'Timothy', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI DARDING', name: 'Beberly Alcantara', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI DARDING', name: 'Martin Alcantara', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI DARDING', name: 'Shaine Fadrilan', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI DARDING', name: 'Ronald Fadrilan', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI DARDING', name: 'Thea Fadrilan', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI DARDING', name: 'Clyde Fadrilan', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI DARDING', name: 'Alexis Fadrilan', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI PRUDING', name: 'Dorie Fadrilan', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI PRUDING', name: 'Nelgrim Fadrilan', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI PRUDING', name: 'Eli Parabuac', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI JUN', name: 'Franklin Eleccion', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI JUN', name: 'Charito Eleccion', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI JUN', name: 'Francis John Fadrilan', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI JUN', name: 'Jonamine Fadrilan', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI JUN', name: 'Juliet Faith Fadrilan', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI JUN', name: 'Finella Jule Fadrilan', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI JUN', name: 'Francess July Fadrilan', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI JUN', name: 'Jonathan David', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI JUN', name: 'Christine Anne David', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI JUN', name: 'Princess Joanne David', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI JUN', name: 'Prince Christhan David', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI JUN', name: 'Prex Nathaniel David', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI JUN', name: 'Felix Fadrilan III', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI JUN', name: 'Gina Fadrilan', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI JUN', name: 'Arabella Fadrilan', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI CORIT', name: 'Cherry Faz', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI CORIT', name: 'Samantha Faz', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI CORIT', name: 'Gian Morales', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI CORIT', name: 'Chester Morale', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI CORIT', name: 'Elora Mangao', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI CORIT', name: 'Ellie Mangao', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI CORIT', name: 'Magic Mangao', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI CORIT', name: 'Elaine Mangao', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI CORIT', name: 'Eric John Mangao', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI CORIT', name: 'Erika Mangao', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI CORIT', name: 'Marlon Fabalina', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI CORIT', name: 'Reshel Fabalina', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI CORIT', name: 'Annika Fabalina', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI CORIT', name: 'Aishel Fabalina', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI LIZA', name: 'Danny Sumayao', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI LIZA', name: 'Liza Sumayao', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI LIZA', name: 'Ian Tapuro', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI LIZA', name: 'May Tapuro', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI LIZA', name: 'Miguel Tapuro', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI LIZA', name: 'Rafael Tapuro', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI LIZA', name: 'Cholo Sabido', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI LIZA', name: 'Pangga Sabido', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI LIZA', name: 'Coco Sabido', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI LIZA', name: 'Tenten Sabido', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI LEONY', name: 'Chris Fiecas', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI LEONY', name: 'Leony Fiecas', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI LEONY', name: 'Yuan Fiecas', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI LEONY', name: 'Elka Santos', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI LEONY', name: 'Ryan Santos', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI LEONY', name: 'Lia Santos', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI LEONY', name: 'Gab Santos', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI LEONY', name: 'Jericho Fiecas', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI LEONY', name: 'Jean Fiecas', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI LEONY', name: 'Jj Fiecas', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI LEONY', name: 'Debie Grefiel', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI LEONY', name: 'Glen Gualisa', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI LEONY', name: 'Demie Oliveron', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI MERLY', name: 'Adrian Fabula', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI MERLY', name: 'Cherry Fabula', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI MERLY', name: 'Andrea Chloe Fabula', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI JUN', name: 'Bong Fadrilan', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI JUN', name: 'Gina Fadrilan', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI JUN', name: 'Bella Fadrilan', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Dwanie Fadrilan', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Lanie Fadrilan', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Nathaniel Fadrilan', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Sharon Fadrilan', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Rey Gaba', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Kevin Gaba', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Alex Padillo', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Bella Gaba', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Ace Gaba', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI TIBOY', name: 'JR Gaba', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Rose Gaba', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Joy Fadrilan', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Lan Joseph Fajardo', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Noreen De Jesus', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Babelin Fadrilan Roxas', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Alex Roxas', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Alexis Mae Roxas', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Aliana Faye Roxas', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Florian Fadrilan Fabito', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Philip Jeid Fabito', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Ann Toribio', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Jonathan Fiestada', colorTeam: 'Green' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Zyra Fiestada', colorTeam: 'Yellow' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Godwin Lorenz', colorTeam: 'Orange' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Lorelie Fadrilan Musa', colorTeam: 'Blue' },
    { family: 'ANAK AT APO NI TIBOY', name: 'Prince Danrie Musa', colorTeam: 'Green' }
];

// Reset password
const RESET_PASSWORD = 'raffle2025';

// Prize list
const PRIZES = {
    lux: [
        '🏍️ Brand New Motorcycle',
        '📱 iPhone 16 Pro Max',
        '💻 MacBook Pro M4',
        '🎮 PlayStation 5 + 10 Games',
        '📺 65" Smart TV 4K',
        '⌚ Apple Watch Ultra 2',
        '🏠 Home Theater System',
        '🚴 Premium Mountain Bike',
        '✈️ Round Trip Ticket to Japan',
        '💎 Gold Necklace (18k)'
    ],
    common: [
        '🍚 25kg Premium Rice',
        '🧴 Grocery Basket (₱3,000)',
        '🔥 Gas Stove',
        '🍳 Complete Cooking Set',
        '🌂 Umbrella Set',
        '🎒 Backpack',
        '🧺 Laundry Basket + Detergent',
        '🍽️ Dinner Plate Set',
        '🛏️ Bed Sheet Set',
        '🧴 Bath Towel Set',
        '⚡ Electric Fan',
        '🔦 Rechargeable Flashlight',
        '🎧 Bluetooth Speaker',
        '☕ Coffee Maker',
        '🍴 Cutlery Set',
        '🧊 Cooler Box',
        '🏀 Basketball',
        '⚽ Soccer Ball',
        '🎨 Art Supply Set',
        '📚 Book Bundle (5 books)',
        '🧸 Plush Toy',
        '🎲 Board Game Set',
        '🕯️ Scented Candle Set',
        '🧤 Kitchen Glove Set',
        '🪴 Plant Pot Set'
    ]
};

let availableLuxPrizes = [...PRIZES.lux];
let availableCommonPrizes = [...PRIZES.common];

// Color groups for additional tagging
const COLOR_GROUPS = ['Blue', 'Green', 'Yellow', 'Orange'];
const COLOR_CLASSES = {
    'Blue': 'color-blue',
    'Green': 'color-green',
    'Yellow': 'color-yellow',
    'Orange': 'color-orange'
};

// State management
let allAttendees = [];
let remainingAttendees = [];
let winners = [];
let currentFilter = 'all';
let currentView = 'remaining'; // 'remaining' or 'selected'
let currentColorFilter = 'all'; // 'all' or specific color
let lastWinner = null; // Track the last drawn winner for prize assignment

// Family color mapping
const familyColors = {
    'ANAK AT APO NI YOLLY': 'family-yolly',
    'ANAK AT APO NI CORIT': 'family-corit',
    'ANAK AT APO NI DARDING': 'family-darding',
    'ANAK AT APO NI PRUDING': 'family-pruding',
    'ANAK AT APO NI JUN': 'family-jun',
    'ANAK AT APO NI LIZA': 'family-liza',
    'ANAK AT APO NI LEONY': 'family-leony',
    'ANAK AT APO NI MERLY': 'family-merly',
    'ANAK AT APO NI TIBOY': 'family-tiboy'
};

// DOM Elements
const loadDataBtn = document.getElementById('loadData');
const fileInput = document.getElementById('fileInput');
const drawWinnerBtn = document.getElementById('drawWinner');
const resetDrawBtn = document.getElementById('resetDraw');
const assignCommonPrizeBtn = document.getElementById('assignCommonPrize');
const assignLuxPrizeBtn = document.getElementById('assignLuxPrize');
const winnerDisplay = document.getElementById('winnerDisplay');
const winnersList = document.getElementById('winnersList');
const attendeesList = document.getElementById('attendeesList');
const searchInput = document.getElementById('searchInput');
const familyFiltersContainer = document.getElementById('familyFilters');
const animationToggle = document.getElementById('animationToggle');
const exportWinnersBtn = document.getElementById('exportWinners');
const luxPrizesList = document.getElementById('luxPrizesList');
const commonPrizesList = document.getElementById('commonPrizesList');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadStaticData();
    attachEventListeners();
});

function attachEventListeners() {
    loadDataBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileUpload);
    drawWinnerBtn.addEventListener('click', drawWinner);
    resetDrawBtn.addEventListener('click', resetDraw);
    assignCommonPrizeBtn.addEventListener('click', () => assignPrize('common'));
    assignLuxPrizeBtn.addEventListener('click', () => assignPrize('lux'));
    searchInput.addEventListener('input', filterAttendees);
    exportWinnersBtn.addEventListener('click', exportWinners);
    
    // View toggle listeners
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentView = e.target.dataset.view;
            renderAttendees();
        });
    });
    
    // Color filter listeners
    document.querySelectorAll('.color-filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.color-filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentColorFilter = e.target.dataset.color;
            filterAttendees();
        });
    });
}

// Load static data
function loadStaticData() {
    // Use the predefined color team assignments from static data
    allAttendees = staticAttendeesData.map((attendee, index) => {
        return {
            id: index + 1,
            family: attendee.family,
            name: attendee.name,
            familyClass: familyColors[attendee.family] || 'family-default',
            colorGroup: attendee.colorTeam,
            colorClass: COLOR_CLASSES[attendee.colorTeam]
        };
    });
    
    // Load from local storage if available
    loadFromLocalStorage();
    
    initializeApp();
}

// Load initial data from CSV file
function loadInitialData() {
    fetch('Registration and Raffle Ticket - ATTENDEES.csv')
        .then(response => response.text())
        .then(data => {
            parseCSVData(data);
            initializeApp();
        })
        .catch(error => {
            console.log('CSV file not found. Using static data.');
            loadStaticData();
        });
}

// Handle file upload
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const data = e.target.result;
        parseCSVData(data);
        initializeApp();
    };
    reader.readAsText(file);
}

// Parse CSV data
function parseCSVData(csvText) {
    const lines = csvText.split('\n');
    allAttendees = [];

    lines.forEach((line, index) => {
        if (index < 2) return; // Skip header rows

        const columns = line.split(',');
        
        // Get data from raffle ticket columns (columns 5 and 6)
        const family = columns[5]?.trim();
        const name = columns[6]?.trim();

        if (family && name && family !== 'RAFFLE TICKET') {
            allAttendees.push({
                id: allAttendees.length + 1,
                family: family,
                name: name,
                familyClass: familyColors[family] || 'family-default'
            });
        }
    });

    remainingAttendees = [...allAttendees];
}

// Initialize app after data is loaded
function initializeApp() {
    updateStats();
    renderFamilyFilters();
    renderAttendees();
    renderPrizes();
    drawWinnerBtn.disabled = false;
    
    if (winners.length > 0) {
        showNotification(`Session restored! ${winners.length} winner(s) loaded from previous session.`, 'success');
    } else {
        showNotification('Data loaded successfully! Ready to draw winners.', 'success');
    }
}

// Save to local storage
function saveToLocalStorage() {
    const sessionData = {
        winners: winners,
        remainingIds: remainingAttendees.map(a => a.id),
        availableLuxPrizes: availableLuxPrizes,
        availableCommonPrizes: availableCommonPrizes,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('raffleSession', JSON.stringify(sessionData));
}

// Load from local storage
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('raffleSession');
    
    if (savedData) {
        try {
            const sessionData = JSON.parse(savedData);
            
            // Restore winners
            winners = sessionData.winners || [];
            
            // Restore remaining attendees
            const remainingIds = sessionData.remainingIds || allAttendees.map(a => a.id);
            remainingAttendees = allAttendees.filter(a => remainingIds.includes(a.id));
            
            // Restore prizes
            availableLuxPrizes = sessionData.availableLuxPrizes || [...PRIZES.lux];
            availableCommonPrizes = sessionData.availableCommonPrizes || [...PRIZES.common];
            
            console.log(`Session restored from ${sessionData.timestamp}`);
        } catch (error) {
            console.error('Error loading session:', error);
            remainingAttendees = [...allAttendees];
            availableLuxPrizes = [...PRIZES.lux];
            availableCommonPrizes = [...PRIZES.common];
        }
    } else {
        remainingAttendees = [...allAttendees];
        availableLuxPrizes = [...PRIZES.lux];
        availableCommonPrizes = [...PRIZES.common];
    }
}

// Clear local storage
function clearLocalStorage() {
    localStorage.removeItem('raffleSession');
}

// Update statistics
function updateStats() {
    const families = new Set(allAttendees.map(a => a.family));
    
    document.getElementById('totalAttendees').textContent = allAttendees.length;
    document.getElementById('totalFamilies').textContent = families.size;
    document.getElementById('remainingCount').textContent = remainingAttendees.length;
    document.getElementById('attendeeCount').textContent = allAttendees.length;
    
    // Update view toggle counts
    document.getElementById('remainingViewCount').textContent = remainingAttendees.length;
    document.getElementById('selectedViewCount').textContent = winners.length;
}

// Render family filters
function renderFamilyFilters() {
    const families = [...new Set(allAttendees.map(a => a.family))].sort();
    
    let html = '<button class="filter-btn active" data-family="all">All Families</button>';
    
    families.forEach(family => {
        const shortName = family.replace('ANAK AT APO NI ', '');
        html += `<button class="filter-btn" data-family="${family}">${shortName}</button>`;
    });
    
    familyFiltersContainer.innerHTML = html;
    
    // Add click events
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.family;
            filterAttendees();
        });
    });
}

// Render attendees list
function renderAttendees() {
    let sourceList = currentView === 'remaining' ? remainingAttendees : winners;
    let filtered = sourceList;
    
    // Apply family filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(a => a.family === currentFilter);
    }
    
    // Apply color filter
    if (currentColorFilter !== 'all') {
        filtered = filtered.filter(a => a.colorGroup === currentColorFilter);
    }
    
    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(a => 
            a.name.toLowerCase().includes(searchTerm) ||
            a.family.toLowerCase().includes(searchTerm) ||
            a.colorGroup.toLowerCase().includes(searchTerm)
        );
    }
    
    if (filtered.length === 0) {
        const message = currentView === 'remaining' 
            ? 'No remaining attendees' 
            : 'No winners yet';
        attendeesList.innerHTML = `<p class="empty-message">${message}</p>`;
        return;
    }
    
    let html = '';
    
    if (currentView === 'remaining') {
        // Show remaining attendees
        filtered.forEach(attendee => {
            html += `
                <div class="attendee-card" data-id="${attendee.id}">
                    <div class="attendee-name">${attendee.name}</div>
                    <div class="attendee-tags">
                        <span class="attendee-family ${attendee.familyClass}">
                            ${attendee.family.replace('ANAK AT APO NI ', '')}
                        </span>
                        <span class="attendee-color ${attendee.colorClass}">
                            ${attendee.colorGroup}
                        </span>
                    </div>
                </div>
            `;
        });
    } else {
        // Show winners (already selected) - in reverse order (newest first)
        const reversedFiltered = [...filtered].reverse();
        reversedFiltered.forEach((attendee, index) => {
            const position = filtered.length - index;
            html += `
                <div class="attendee-card selected" data-id="${attendee.id}">
                    <div class="attendee-name">
                        #${position} - ${attendee.name}
                    </div>
                    <div class="attendee-tags">
                        <span class="attendee-family ${attendee.familyClass}">
                            ${attendee.family.replace('ANAK AT APO NI ', '')}
                        </span>
                        <span class="attendee-color ${attendee.colorClass}">
                            ${attendee.colorGroup}
                        </span>
                    </div>
                </div>
            `;
        });
    }
    
    attendeesList.innerHTML = html;
    
    // Highlight the most recent winner temporarily
    if (currentView === 'selected' && winners.length > 0) {
        const latestWinnerCard = attendeesList.querySelector(`[data-id="${winners[0].id}"]`);
        if (latestWinnerCard) {
            latestWinnerCard.classList.add('winner-highlight');
            setTimeout(() => {
                latestWinnerCard.classList.remove('winner-highlight');
            }, 2000);
        }
    }
}

// Assign prize to winner
function assignPrize(prizeType) {
    if (!lastWinner) {
        showNotification('Please draw a winner first!', 'warning');
        return;
    }
    
    let prize;
    if (prizeType === 'lux') {
        if (availableLuxPrizes.length === 0) {
            showNotification('No luxury prizes left!', 'warning');
            return;
        }
        const randomIndex = Math.floor(Math.random() * availableLuxPrizes.length);
        prize = availableLuxPrizes[randomIndex];
        availableLuxPrizes.splice(randomIndex, 1);
    } else {
        if (availableCommonPrizes.length === 0) {
            showNotification('No common prizes left!', 'warning');
            return;
        }
        const randomIndex = Math.floor(Math.random() * availableCommonPrizes.length);
        prize = availableCommonPrizes[randomIndex];
        availableCommonPrizes.splice(randomIndex, 1);
    }
    
    // Update winner with prize
    const winnerIndex = winners.findIndex(w => w.id === lastWinner.id && !w.prize);
    if (winnerIndex !== -1) {
        winners[winnerIndex].prize = prize;
        winners[winnerIndex].prizeType = prizeType;
    }
    
    // Clear last winner
    lastWinner = null;
    
    // Disable prize buttons
    assignCommonPrizeBtn.disabled = true;
    assignLuxPrizeBtn.disabled = true;
    
    // Save and update
    saveToLocalStorage();
    updatePrizeCounts();
    renderWinners();
    renderPrizes();
    
    showNotification(`🎁 Prize assigned: ${prize}`, 'success');
}

// Render prizes list
function renderPrizes() {
    // Render lux prizes
    let luxHtml = '';
    availableLuxPrizes.forEach(prize => {
        luxHtml += `<div class="prize-item prize-lux">${prize}</div>`;
    });
    if (availableLuxPrizes.length === 0) {
        luxHtml = '<p class="empty-message">All luxury prizes claimed!</p>';
    }
    luxPrizesList.innerHTML = luxHtml;
    
    // Render common prizes
    let commonHtml = '';
    availableCommonPrizes.forEach(prize => {
        commonHtml += `<div class="prize-item prize-common">${prize}</div>`;
    });
    if (availableCommonPrizes.length === 0) {
        commonHtml = '<p class="empty-message">All common prizes claimed!</p>';
    }
    commonPrizesList.innerHTML = commonHtml;
    
    updatePrizeCounts();
}

// Update prize counts
function updatePrizeCounts() {
    document.getElementById('luxCount').textContent = availableLuxPrizes.length;
    document.getElementById('commonCount').textContent = availableCommonPrizes.length;
    document.getElementById('luxPrizeCount').textContent = availableLuxPrizes.length;
    document.getElementById('commonPrizeCount').textContent = availableCommonPrizes.length;
}

// Filter attendees
function filterAttendees() {
    renderAttendees();
}

// Draw winner with animation
function drawWinner() {
    if (remainingAttendees.length === 0) {
        showNotification('No more attendees to draw!', 'warning');
        return;
    }
    
    const useAnimation = animationToggle.checked;
    
    if (useAnimation) {
        animateRandomSelection();
    } else {
        selectWinner();
    }
}

// Animate random selection
function animateRandomSelection() {
    drawWinnerBtn.disabled = true;
    let iterations = 0;
    const maxIterations = 20;
    
    const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * remainingAttendees.length);
        const tempWinner = remainingAttendees[randomIndex];
        
        winnerDisplay.innerHTML = `
            <div class="winner-card animating">
                <div class="winner-trophy">🎟️</div>
                <div class="winner-name">${tempWinner.name}</div>
                <span class="winner-family ${tempWinner.familyClass}">
                    ${tempWinner.family.replace('ANAK AT APO NI ', '')}
                </span>
            </div>
        `;
        
        iterations++;
        
        if (iterations >= maxIterations) {
            clearInterval(interval);
            selectWinner();
        }
    }, 100);
}

// Select final winner
function selectWinner() {
    const randomIndex = Math.floor(Math.random() * remainingAttendees.length);
    const winner = remainingAttendees[randomIndex];
    
    // Store as last winner (for prize assignment)
    lastWinner = winner;
    
    // Remove from remaining attendees (automatic removal)
    remainingAttendees = remainingAttendees.filter(a => a.id !== winner.id);
    
    // Add to winners list (newest first) - without prize initially
    winners.unshift({ ...winner, prize: null, prizeType: null });
    
    // Save to local storage
    saveToLocalStorage();
    
    // Display winner
    displayWinner(winner);
    
    // Update UI
    updateStats();
    renderAttendees();
    renderWinners();
    
    // Enable prize buttons
    assignCommonPrizeBtn.disabled = availableCommonPrizes.length === 0;
    assignLuxPrizeBtn.disabled = availableLuxPrizes.length === 0;
    
    // Show confetti
    createConfetti();
    
    // Re-enable button
    drawWinnerBtn.disabled = false;
    
    // Automatically switch to winners view temporarily to show the removed name
    const wasOnRemainingView = currentView === 'remaining';
    if (wasOnRemainingView) {
        // Flash the selected view briefly
        setTimeout(() => {
            const selectedBtn = document.querySelector('.toggle-btn[data-view="selected"]');
            selectedBtn.classList.add('winner-highlight');
            setTimeout(() => {
                selectedBtn.classList.remove('winner-highlight');
            }, 2000);
        }, 500);
    }
    
    // Show notification with removal confirmation
    showNotification(`🎉 Winner: ${winner.name} | ✅ Now assign a prize!`, 'success');
}

// Display winner
function displayWinner(winner) {
    winnerDisplay.innerHTML = `
        <div class="winner-card">
            <div class="winner-trophy">🏆</div>
            <div class="winner-name">${winner.name}</div>
            <div class="winner-tags">
                <span class="winner-family ${winner.familyClass}">
                    ${winner.family.replace('ANAK AT APO NI ', '')}
                </span>
                <span class="winner-color ${winner.colorClass}">
                    ${winner.colorGroup} Team
                </span>
            </div>
        </div>
    `;
}

// Render winners list
function renderWinners() {
    if (winners.length === 0) {
        winnersList.innerHTML = '<p class="empty-message">No winners yet</p>';
        exportWinnersBtn.style.display = 'none';
        return;
    }
    
    let html = '';
    winners.forEach((winner, index) => {
        const prizeDisplay = winner.prize 
            ? `<div class="winner-prize-tag ${winner.prizeType === 'lux' ? 'prize-lux' : 'prize-common'}">${winner.prize}</div>`
            : '<div class="winner-prize-tag prize-pending">⏳ Prize pending...</div>';
        
        html += `
            <div class="winner-item">
                <div class="winner-details">
                    <div class="winner-number">${index + 1}</div>
                    <div class="winner-info">
                        <div class="winner-item-name">${winner.name}</div>
                        <div class="winner-item-tags">
                            <span class="winner-item-family ${winner.familyClass}">
                                ${winner.family.replace('ANAK AT APO NI ', '')}
                            </span>
                            <span class="winner-item-color ${winner.colorClass}">
                                ${winner.colorGroup}
                            </span>
                        </div>
                        ${prizeDisplay}
                    </div>
                </div>
            </div>
        `;
    });
    
    winnersList.innerHTML = html;
    exportWinnersBtn.style.display = 'block';
}

// Reset draw
function resetDraw() {
    if (winners.length === 0) {
        showNotification('No winners to reset!', 'warning');
        return;
    }
    
    // Create custom modal for password input
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 20px;
        max-width: 400px;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.3s ease;
    `;
    
    modalContent.innerHTML = `
        <h2 style="color: #ef4444; margin-bottom: 20px;">🔒 Password Required</h2>
        <p style="color: #6b7280; margin-bottom: 20px;">Enter password to reset all winners:</p>
        <input type="password" id="resetPasswordInput" 
               style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; 
                      border-radius: 10px; font-size: 16px; margin-bottom: 20px;"
               placeholder="Enter password">
        <div style="display: flex; gap: 10px;">
            <button id="cancelReset" 
                    style="flex: 1; padding: 12px 20px; background: #f3f4f6; 
                           border: none; border-radius: 10px; cursor: pointer; 
                           font-weight: 600; font-size: 16px;">
                Cancel
            </button>
            <button id="confirmReset" 
                    style="flex: 1; padding: 12px 20px; background: linear-gradient(135deg, #ef4444, #dc2626); 
                           color: white; border: none; border-radius: 10px; cursor: pointer; 
                           font-weight: 600; font-size: 16px;">
                Reset
            </button>
        </div>
        <p style="color: #9ca3af; font-size: 12px; margin-top: 15px;">
            Hint: raffle2025
        </p>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    const passwordInput = document.getElementById('resetPasswordInput');
    const confirmBtn = document.getElementById('confirmReset');
    const cancelBtn = document.getElementById('cancelReset');
    
    // Focus on input
    setTimeout(() => passwordInput.focus(), 100);
    
    // Handle confirm
    const handleConfirm = () => {
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === RESET_PASSWORD) {
            // Password correct - reset everything
            winners = [];
            remainingAttendees = [...allAttendees];
            currentView = 'remaining';
            
            // Clear local storage
            clearLocalStorage();
            
            // Reset prizes
            availableLuxPrizes = [...PRIZES.lux];
            availableCommonPrizes = [...PRIZES.common];
            lastWinner = null;
            assignCommonPrizeBtn.disabled = true;
            assignLuxPrizeBtn.disabled = true;
            
            // Update toggle buttons
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.toggle-btn[data-view="remaining"]').classList.add('active');
            
            winnerDisplay.innerHTML = `
                <div class="winner-placeholder">
                    🎟️
                    <p>Click "Draw Winner" to start!</p>
                </div>
            `;
            
            updateStats();
            renderAttendees();
            renderWinners();
            renderPrizes();
            
            document.body.removeChild(modal);
            showNotification('✅ All winners have been reset and session cleared!', 'success');
        } else {
            // Wrong password
            passwordInput.style.borderColor = '#ef4444';
            passwordInput.value = '';
            passwordInput.placeholder = '❌ Wrong password! Try again...';
            showNotification('❌ Incorrect password!', 'warning');
        }
    };
    
    // Handle cancel
    const handleCancel = () => {
        document.body.removeChild(modal);
        showNotification('Reset cancelled', 'info');
    };
    
    // Event listeners
    confirmBtn.addEventListener('click', handleConfirm);
    cancelBtn.addEventListener('click', handleCancel);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleConfirm();
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) handleCancel();
    });
}

// Create confetti animation
function createConfetti() {
    const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Show notification
function showNotification(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
}

// Export winners to CSV
function exportWinners() {
    if (winners.length === 0) return;
    
    let csv = 'Position,Name,Family,Color Group,Prize,Prize Type\n';
    winners.forEach((winner, index) => {
        const prize = winner.prize || 'No prize assigned';
        const prizeType = winner.prizeType || 'N/A';
        csv += `${index + 1},"${winner.name}","${winner.family}","${winner.colorGroup}","${prize}","${prizeType}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `raffle_winners_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Winners exported successfully!', 'success');
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Spacebar to draw
    if (e.code === 'Space' && !drawWinnerBtn.disabled && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        drawWinner();
    }
    
    // R to reset (with Ctrl/Cmd)
    if ((e.ctrlKey || e.metaKey) && e.code === 'KeyR') {
        e.preventDefault();
        resetDraw();
    }
});
