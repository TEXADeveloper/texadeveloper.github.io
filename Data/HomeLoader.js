loadData('./Data/Games.json', "#gameOutput", "games");
loadData('./Data/Education.json', "#educationOutput", "education");
loadData('./Data/Skills.json', "#techSkillsOutput", "technical");
loadData('./Data/Skills.json', "#softSkillsOutput", "soft");

function loadData(url, id, propertyPath)
{
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(elements) {
        let placeholder = document.querySelector(id);
        let out = "";
        if (propertyPath == "games") {
            out = loadGames(elements);
        } else if (propertyPath == "education")
        {
            out = loadEducation(elements);
        } else {
            out = loadSkills(elements, propertyPath);
        }
        placeholder.innerHTML = out;
    });
}

function loadGames(games) {
    let out = "";
    console.log(games);
    for (var i in games) {
        out += `
            <div class="game">
                <div class="image" style="background-image: url('${games[i].imageLink}');"></div>
                <a href="./Pages/Games.html?id=${i}" target="_self">
                    <div class="info">
                        <h1 class="title">${games[i].title}</h1>
                        <p>${games[i].description}</p>
                    </div>
                </a>
            </div>
        `;
    }
    return out;
}

function loadEducation(education) {
    let out = "";
    for (let edu of education) {
        out += `
            <div class="education">
                <div class="image" style="background-image: url('${edu.imageLink}');"></div>
                <a href="${edu.url}" target="_blank">
                    <div class="info">
                        <div class="title">
                            <h1>${edu.institution}</h1>
                            <h2>${edu.time}</h2>
                        </div>
                        <small>${edu.title}</small>
                    </div>
                    <div class="arrow"></div>
                </a>
            </div>
        `;
    }
    return out;
}

function loadSkills(skills, propertyPath) {
    let out = "";
    for (let skill of append(skills, propertyPath)) {
        out += `
            <li>${skill}</li>
        `;
    }
    return out;
}

function append(skills, path) {
    var target = skills;
    path = path.split('.');
    for(const element of path) {
        target = target[element];
    }
    return target;
}