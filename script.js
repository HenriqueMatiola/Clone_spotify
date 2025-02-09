const searchInput = document.getElementById('search-input');
const resultsArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((Response) => Response.json())
        // .then((result) => displayResults())
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultsArtists.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm)
});