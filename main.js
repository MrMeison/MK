const arenaElement = document.querySelector('.arenas');
const randomButtonElement = arenaElement.querySelector('.button');

const players = [
    {
        player: 1,
        name: "SCORPION",
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
        weapon: [],
        attack: () => {
            console.log(`${this.name} Fight...`);
        }
    },
    {
        player: 2,
        name: "KITANA",
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
        weapon: [],
        attack: () => {
            console.log(`${this.name} Fight...`);
        }
    }
];

const renderPlayer = (type, player) => {
    const { name, hp, img } = player;
    const playerElement = document.createElement('div');
    playerElement.classList.add(type);

    const progressBar = document.createElement('div');
    progressBar.classList.add('progressbar');
    const lifeElement = document.createElement('div');
    lifeElement.classList.add('life');
    lifeElement.style.width = `${hp}%`;
    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = name;
    progressBar.append(lifeElement, nameElement);

    const characterElement = document.createElement('div');
    characterElement.classList.add('character');
    const image = document.createElement('img');
    image.src = img;
    characterElement.append(image);

    playerElement.append(progressBar, characterElement);

    arenaElement.append(playerElement);
}
const renderPlayers = (players) => {
    players.forEach((player) => {
        renderPlayer(`player${player.player}`, player);
    });
};

const getRandomNumber = (min, max) => {
    return min + Math.floor(Math.random() * (max - min));
};

const getRandomItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
};

const getHitValue = () => {
    return getRandomNumber(1, 20);
};

const changeHP = (player, value) => {
    let newHP = player.hp - value;
    if (newHP < 0) {
        newHP = 0;
    }
    player.hp = newHP;
};

const rerenderHP = (player) => {
    const lifeElement = arenaElement.querySelector(`.player${player.player} .life`);
    lifeElement.style.width = `${player.hp}%`;
}

randomButtonElement.addEventListener('click', () => {
    const player = getRandomItem(players);
    changeHP(player, getHitValue());
    rerenderHP(player);

    if (player.hp === 0) {
        randomButtonElement.disabled = true;
    }
});

renderPlayers(players);
