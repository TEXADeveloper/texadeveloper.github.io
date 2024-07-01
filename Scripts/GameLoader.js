const keyValues = window.location.search;
const urlParams = new URLSearchParams(keyValues);
const id = urlParams.get('id');
loadGameInfo(id);

function loadGameInfo(id) {
    if (id == "")
        errorPage();
    return fetch('./Data/Games.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(games) {
            if (id < games.length && id >= 0) {
                displayPage(games[id]);
                displayImage(games[id]);
                displayInfo(games[id]);
                displayButton(games[id]);
                displayDescription(games[id])
            } else {
                errorPage();
            }
        });
}

function errorPage() {
    window.location.replace(window.location.href.replace('Games.html?id=' + id,'') + "NotFound.html");
}

function displayPage(game) {
    let placeholder = document.getElementById('pageOutput');
    let out = `Inti Fernandez | ${game.title}`;
    placeholder.innerHTML = out;
}

function displayImage(game) {
    let placeholder = document.getElementById('imageOutput');
    let out = `<div class="image" style="background-image: url('${game.picture}');"></div>`;
    placeholder.innerHTML = out;
}

function displayInfo(game) {
    let placeholder = document.getElementById('informationOutput');
    let out = `
    <li><img class="icon" src="Images/GamesPage/Title.png"><b>Title</b>${game.title}</li>
    <li><img class="icon" src="Images/GamesPage/Genere.png"><b>Genere</b>${game.genre}</li>
    <li><img class="icon" src="Images/GamesPage/Type.png"><b>Project Type</b>${game.type}</li>
    <li><img class="icon" src="Images/GamesPage/Role.png"><b>Role</b>${game.role}</li>
    <li><img class="icon" src="Images/GamesPage/Team.png"><b>Team Size</b>${game.team}</li>
    <li><img class="icon" src="Images/GamesPage/Release.png"><b>Release Date</b>${game.releaseDate}</li>
    <li><img class="icon" src="Images/GamesPage/Time.png"><b>Dedicated Time</b>${game.dedicatedTime}</li>
    <li><img class="icon" src="Images/GamesPage/Engine.png"><b>Game Engine</b>${game.engine}</li>
    <li><img class="icon" src="Images/GamesPage/Git.png"><a href="${game.repository}" target="_blank">Game Repository</a></li>
    `;
    placeholder.innerHTML = out;
}

function displayButton(game) {
    let placeholder = document.getElementById('downloadOutput');
    let out = `
    <a class="downloadButton" href="${game.download}" target="_blank"><img class="icon" src="Images/GamesPage/Itch.png">Download Game</a>
    `;
    placeholder.innerHTML = out;
}

function displayDescription(game) {
    let placeholder = document.getElementById('descriptionOutput');
    let out = "";
    for (var i in game.description) {
        out += `${game.description[i]}`;
    }
    placeholder.innerHTML = out;
}
