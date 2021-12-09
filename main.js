const players = [
    {
        name: "SCORPION",
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
        attack: (fight) => {
            console.log(`${this.name}`)
        }
    },
    {
        name: "KITANA",
        hp: 70,
        img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
        attack: (fight) => {
            console.log(`${this.name}`)
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

    const arenaElement = document.querySelector('.arenas');

    arenaElement.append(playerElement);
}

players.forEach((player, index) => {
    createPlayer(`player${index + 1}`, player);
});
