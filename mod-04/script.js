'use strict';

const searchForm = document.querySelector('#searchForm');

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
    for(const element of json){
        const show = element.show;
            console.log(show.name + ": " + show.image?.medium);
    }
}