'use strict';

const searchForm = document.querySelector('#searchForm');
const resultsDiv = document.getElementById('results');

searchForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const searchTerm = document.querySelector('input[name=q]').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        const jsonData = await response.json();
        console.log(jsonData);
        showData(jsonData);
    } catch (e) {
        console.log(e.message);
    }
});

function showData(json) {
    resultsDiv.innerHTML = ''; // Clear previous results
    json.forEach(element => {
        const show = element.show;
        const article = document.createElement('article');
        const nameHeading = document.createElement('h2');
        nameHeading.textContent = show.name;

        const link = document.createElement('a');
        link.href = show.url;
        link.textContent = "Details";
        link.target = "_blank";

        let imageUrl;
        if (show.image && show.image.medium) {
            imageUrl = show.image.medium;
        } else {
            imageUrl = 'https://via.placeholder.com/210x295?text=Not%20Found';
        }

        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = show.name;

        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = show.summary;

        article.appendChild(nameHeading);
        article.appendChild(link);
        article.appendChild(image);
        article.appendChild(summaryDiv);

        resultsDiv.appendChild(article);
    });
}

