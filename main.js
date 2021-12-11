const arenaElement = document.querySelector('.arenas');

const players = [
    {
        name: "SCORPION",
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
        weapon: [],
        attack: () => {
            console.log(`${this.name} Fight...`);
        }
    },
    {
        name: "KITANA",
        hp: 70,
        img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
        weapon: [],
        attack: () => {
            console.log(`${this.name} Fight...`);
        }
    }
];

const createPlayer = (type, player) => {
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

players.forEach((player, index) => {
    createPlayer(`player${index + 1}`, player);
});
