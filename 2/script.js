const registrationForm = document.getElementById('registrationForm');
const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
document.getElementById('fetchDataButton').addEventListener('click', function() {
    fetchRandomUserData();
});

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = { name, email, password };

    // Store data in local storage
    usersData.push(userData);
    localStorage.setItem('usersData', JSON.stringify(usersData));

    // Redirect to new page with data list
    window.location.href = 'users.html'; // Replace with your HTML file
});

// function to get random user data from the internet and push that data into local storage.
function fetchRandomUserData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const userData = JSON.parse(xhr.responseText);
            const randomUser = userData[Math.floor(Math.random() * userData.length)];
            const { name, email } = randomUser;
            const user = { name, email };

            const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
            usersData.push(user);
            localStorage.setItem('usersData', JSON.stringify(usersData));

            window.location.href = 'users.html'; // Redirect to new page with data list
        } else {
            console.error('Failed to fetch data:', xhr.statusText);
        }
    };
    xhr.onerror = function() {
        console.error('Failed to fetch data.');
    };
    xhr.send();
}