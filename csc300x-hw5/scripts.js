document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('click', function () {
        const username = document.getElementById('username').value.trim();
        if (username) {
            fetchRepositories(username);
        } else {
            alert('Please enter a GitHub username.');
        }
    });
});

async function fetchRepositories(username) {
    const url = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        displayRepositories(data);
    } catch (error) {
        console.error('Error fetching repositories:', error);
        alert('Error fetching repositories. Please try again later.');
    }
}

function displayRepositories(repositories) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    repositories.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.classList.add('repo');
        repoElement.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>Description: ${repo.description || 'N/A'}</p>
            <p>Created: ${new Date(repo.created_at).toLocaleDateString()}</p>
            <p>Last Updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
            <p>Watchers: ${repo.watchers_count}</p>
        `;
        gallery.appendChild(repoElement);
    });
}