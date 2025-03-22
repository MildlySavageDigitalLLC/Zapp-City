// Simulated databases
const existingProfiles = [];
const ledger = [];

// Navigation Functionality
function navigate(section) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear existing content

    switch (section) {
        case 'chatrooms':
            mainContent.innerHTML = `
                <h2>Select Your State</h2>
                <select id="state-selector" onchange="enterChatroom()">
                    <option value="">-- Select a State --</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="US Virgin Islands">US Virgin Islands</option>
                </select>
                <div id="chatroom" style="display:none;">
                    <h3 id="chatroom-title"></h3>
                    <div id="chat-messages"></div>
                    <input type="file" id="upload-media" accept="image/*,video/*">
                    <input type="text" id="chat-input" placeholder="Type your message">
                    <button onclick="sendMessage()">Send</button>
                </div>
            `;
            break;
        
        case 'transactions':
            mainContent.innerHTML = `
                <h2>Transactions</h2>
                <ul>
                    <li><a href="https://play.google.com/store/apps/details?id=com.onedebit.chime" target="_blank">Chime</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=com.squareup.cash" target="_blank">Cash App</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=zapsolutions.strike" target="_blank">Strike</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=com.app.speedwallet" target="_blank">Speed Wallet</a></li>
                </ul>
            `;
            break;

        case 'profile':
            mainContent.innerHTML = `
                <h2>Create Your Profile</h2>
                <form id="profile-form" onsubmit="createProfile(event)">
                    <label for="username">Username:</label>
                    <input type="text" id="username" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" required>
                    <label for="profile-pic">Upload Profile Picture:</label>
                    <input type="file" id="profile-pic" accept="image/*" required>
                    <button type="submit">Create Profile</button>
                </form>
                <div id="profile-preview" style="display: none;">
                    <h3>Your Profile</h3>
                    <img id="profile-image" alt="Profile Picture" style="width: 100px; height: 100px; border-radius: 50%;">
                    <p id="profile-username"></p>
                </div>
                <p id="error-message" style="color: red;"></p>
            `;
            break;

        case 'donations':
            mainContent.innerHTML = `
                <h2>Donations</h2>
                <ul>
                    <li>Send Sats to Strike:
                        <ul>
                            <li>bc1qrv9gljuwdmz68ark7skrzfkfhl2c7dm0a5u6xp</li>
                            <li>bc1qazf4emyrwql3nhvk26kt9fke9xk2alhrq55lqx</li>
                        </ul>
                    </li>
                    <li><a href="https://use.foldapp.com/r/VJXRJU7P" target="_blank">Sign up for Fold Bitcoin Debit or Credit Card</a></li>
                    <li>Send Sats to Cash App:
                        <ul>
                            <li>bc1q6klq0egfg78qp97x5prnuswn03uz9kttv2q5fj</li>
                        </ul>
                    </li>
                    <li>Send Cash via Chime:
                        <ul>
                            <li>$MildlySavageDigitalLLC</li>
                        </ul>
                    </li>
                    <li><a href="https://chime.com/r/anthonyrose36?c=s" target="_blank">Sign up for Chime App</a></li>
                    <li><a href="https://invite.strike.me/TPQPSR" target="_blank">Sign up for Strike App</a></li>
                    <li><a href="https://cash.app/app/8214HJX" target="_blank">Sign up for Cash App</a></li>
                    <li><a href="https://links.speed.app/referral?referral_code=F621SL" target="_blank">
                        Sign up for Speed Wallet with Referral Code: F621SL</a></li>
                </ul>
            `;
            break;

        case 'ledger':
            mainContent.innerHTML = `
                <h2>Open Ledger</h2>
                <ul id="ledger-list"></ul>
            `;
            renderLedger();
            break;

        default:
            mainContent.innerHTML = `
                <h2>Welcome to Zapp City</h2>
                <p>Select an option from the navigation bar to get started.</p>
            `;
            break;
    }
}

// Chatroom Functionality
function enterChatroom() {
    const state = document.getElementById('state-selector').value;
    if (state) {
        document.getElementById('chatroom').style.display = 'block';
        document.getElementById('chatroom-title').innerText = `Chatroom: ${state}`;
    }
}

function createProfile(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const profilePicInput = document.getElementById('profile-pic');
    const errorMessage = document.getElementById('error-message');
    const profilePreview = document.getElementById('profile-preview');
    const profileImage = document.getElementById('profile-image');
    const profileUsername = document.getElementById('profile-username');

    // Check for duplicate usernames
    if (existingProfiles.some(profile => profile.username === username)) {
        errorMessage.innerText = 'This username is already in use. Please choose another.';
        return;
    }

    // Clear any previous error message
    errorMessage.innerText = '';

    // Process and display the profile picture
    if (profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(event) {
            profileImage.src = event.target.result;
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }

    // Save the profile data to the simulated database
    existingProfiles.push({ username, password });

    // Display the profile preview
    profileUsername.innerText = `Username: ${username}`;
    profilePreview.style.display = 'block';

    // Confirmation message
    alert('Profile created successfully!');
}

// Simulated chatroom data storage

const chatrooms = {}; // Each state's chatroom will have its messages stored here

function enterChatroom() {

    const state = document.getElementById('state-selector').value;

    if (state) {

        // Create a chatroom for the state if it doesn't exist

        if (!chatrooms[state]) {

            chatrooms[state] = [];

        }

        // Display the chatroom

        const chatroom = document.getElementById('chatroom');

        const chatroomTitle = document.getElementById('chatroom-title');

        const chatMessages = document.getElementById('chat-messages');

        chatroom.style.display = 'block';

        chatroomTitle.innerText = `Chatroom: ${state}`;

        chatMessages.innerHTML = ''; // Clear the messages display

        // Load existing messages for the state

        chatrooms[state].forEach(message => {

            displayMessage(message.username, message.text);

        });

    }

}

function sendMessage() {

    const state = document.getElementById('state-selector').value;

    const chatInput = document.getElementById('chat-input');

    const messageText = chatInput.value.trim();

    if (state && messageText) {

        const username = "User123"; // Placeholder for username; implement dynamic user assignment later

        // Save the message to the chatroom

        const message = { username, text: messageText };

        chatrooms[state].push(message);

        // Display the message in the chatroom

        displayMessage(username, messageText);

        // Clear the input field

        chatInput.value = '';

    }

}

function displayMessage(username, text) {

    const chatMessages = document.getElementById('chat-messages');

    const messageElement = document.createElement('p');

    messageElement.innerHTML = `<strong>${username}:</strong> ${text}`;

    chatMessages.appendChild(messageElement);

}

// Store the currently logged-in user
let currentUser = null;

// Update the profile creation function to set the current user
function createProfile(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const profilePicInput = document.getElementById('profile-pic');
    const errorMessage = document.getElementById('error-message');
    const profilePreview = document.getElementById('profile-preview');
    const profileImage = document.getElementById('profile-image');
    const profileUsername = document.getElementById('profile-username');

    // Check for duplicate usernames
    if (existingProfiles.some(profile => profile.username === username)) {
        errorMessage.innerText = 'This username is already in use. Please choose another.';
        return;
    }

    // Clear any previous error message
    errorMessage.innerText = '';

    // Process and display the profile picture
    if (profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(event) {
            profileImage.src = event.target.result;
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }

    // Save the profile data to the simulated database
    existingProfiles.push({ username, password });

    // Set the current user
    currentUser = username;

    // Display the profile preview
    profileUsername.innerText = `Username: ${username}`;
    profilePreview.style.display = 'block';

    // Confirmation message
    alert('Profile created successfully!');
}

// Enhanced messaging functions
function enterChatroom() {
    const state = document.getElementById('state-selector').value;

    if (state) {
        // Create a chatroom for the state if it doesn't exist
        if (!chatrooms[state]) {
            chatrooms[state] = [];
        }

        // Display the chatroom
        const chatroom = document.getElementById('chatroom');
        const chatroomTitle = document.getElementById('chatroom-title');
        const chatMessages = document.getElementById('chat-messages');

        chatroom.style.display = 'block';
        chatroomTitle.innerText = `Chatroom: ${state}`;
        chatMessages.innerHTML = ''; // Clear the messages display

        // Load existing messages for the state
        chatrooms[state].forEach(message => {
            displayMessage(message.username, message.text, state);
        });
    }
}

function sendMessage() {
    const state = document.getElementById('state-selector').value;
    const chatInput = document.getElementById('chat-input');
    const messageText = chatInput.value.trim();

    if (!currentUser) {
        alert('You must create a profile first!');
        return;
    }

    if (state && messageText) {
        // Save the message to the chatroom
        const message = { username: currentUser, text: messageText };
        chatrooms[state].push(message);

        // Display the message in the chatroom
        displayMessage(currentUser, messageText, state);

        // Clear the input field
        chatInput.value = '';
    }
}

function displayMessage(username, text, state) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `
        <p><strong>${username}:</strong> ${text}</p>
        <button onclick="replyMessage('${username}', '${text}', '${state}')">Reply</button>
    `;
    chatMessages.appendChild(messageElement);
}

function replyMessage(originalUsername, originalText, state) {
    const replyText = prompt(`Reply to ${originalUsername}: "${originalText}"`);
    if (replyText && state) {
        const reply = { username: currentUser, text: replyText };
        chatrooms[state].push(reply);

        // Display the reply in the chatroom
        displayMessage(currentUser, `Replying to ${originalUsername}: ${replyText}`, state);
    }
}

function sendMessage() {

    const state = document.getElementById('state-selector').value;

    const chatInput = document.getElementById('chat-input');

    const mediaInput = document.getElementById('upload-media');

    const messageText = chatInput.value.trim();

    const file = mediaInput.files[0]; // Uploaded file

    if (!currentUser) {

        alert('You must create a profile first!');

        return;

    }

    if (state && (messageText || file)) {

        const message = {

            username: currentUser,

            text: messageText,

            media: null,

        };

        // If a file is uploaded, read it as a data URL

        if (file) {

            const reader = new FileReader();

            reader.onload = function(event) {

                message.media = event.target.result; // Media file URL

                chatrooms[state].push(message); // Save to chatroom

                displayMessage(message.username, message.text, message.media); // Display message

            };

            reader.readAsDataURL(file);

        } else {

            chatrooms[state].push(message); // Save to chatroom

            displayMessage(message.username, message.text, null); // Display message

        }

        // Clear inputs

        chatInput.value = '';

        mediaInput.value = ''; // Reset file input

    }

}

function displayMessage(username, text, media) {

    const chatMessages = document.getElementById('chat-messages');

    const messageElement = document.createElement('div');

    messageElement.style.marginBottom = '15px';

    // Add the username and text

    messageElement.innerHTML = `<p><strong>${username}:</strong> ${text}</p>`;

    // If media is included, add it to the message

    if (media) {

        const mediaElement = document.createElement('div');

        if (media.startsWith('data:image')) {

            mediaElement.innerHTML = `<img src="${media}" alt="Uploaded Image" style="max-width: 100%; max-height: 200px; display: block; margin-top: 5px;">`;

        } else if (media.startsWith('data:video')) {

            mediaElement.innerHTML = `<video controls style="max-width: 100%; max-height: 200px; display: block; margin-top: 5px;">

                <source src="${media}" type="video/mp4">

                Your browser does not support the video tag.

            </video>`;

        }

        messageElement.appendChild(mediaElement);

    }

    chatMessages.appendChild(messageElement);

}

function displayActiveUsers() {

    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML = `

        <h2>Active Users</h2>

        <p>Total Users: ${existingProfiles.length}</p>

        <ul id="user-list"></ul>

    `;

    const userList = document.getElementById('user-list');

    existingProfiles.forEach(profile => {

        const listItem = document.createElement('li');

        listItem.innerText = profile.username;

        userList.appendChild(listItem);

    });

}

// Update the Profile navigation to include the active user list

function navigateToProfile() {

    displayActiveUsers(); // Show active users

    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML += `

        <h2>Create a New Profile</h2>

        <form id="profile-form" onsubmit="createProfile(event)">

            <label for="username">Username:</label>

            <input type="text" id="username" required>

            <label for="password">Password:</label>

            <input type="password" id="password" required>

            <label for="profile-pic">Upload Profile Picture:</label>

            <input type="file" id="profile-pic" accept="image/*">

            <button type="submit">Create Profile</button>

        </form>

        <p id="error-message" style="color: red;"></p>

    `;

}
        


function displayMessage(username, text, media) {

    const chatMessages = document.getElementById('chat-messages');

    const messageElement = document.createElement('div');

    messageElement.style.marginBottom = '15px';

    // Add the username and text

    messageElement.innerHTML = `<p><strong>${username}:</strong> ${text}</p>`;

    // If media is included, add it to the message

    if (media) {

        const mediaElement = document.createElement('div');

        if (media.startsWith('data:image')) {

            mediaElement.innerHTML = `<img src="${media}" alt="Uploaded Image" style="max-width: 100%; max-height: 200px; display: block; margin-top: 5px;">`;

        } else if (media.startsWith('data:video')) {

            mediaElement.innerHTML = `<video controls style="max-width: 100%; max-height: 200px; display: block; margin-top: 5px;">

                <source src="${media}" type="video/mp4">

                Your browser does not support the video tag.

            </video>`;

        }

        messageElement.appendChild(mediaElement);

    }

    // Add the "Reply" button

    const replyButton = document.createElement('button');

    replyButton.innerText = 'Reply';

    replyButton.style.marginTop = '10px';

    replyButton.onclick = function () {

        replyMessage(username, text);

    };

    messageElement.appendChild(replyButton);

    chatMessages.appendChild(messageElement);

}

function replyMessage(originalUsername, originalText) {

    const replyText = prompt(`Reply to ${originalUsername}: "${originalText}"`);

    if (replyText) {

        const state = document.getElementById('state-selector').value;

        const reply = { username: currentUser, text: `Reply to ${originalUsername}: ${replyText}` };

        // Save the reply to the state chatroom

        chatrooms[state].push(reply);

        // Display the reply in the chatroom

        displayMessage(currentUser, reply.text, null);

    }

}






