const superheroes = [
    'Superman', 'Batman', 'Spider-Man', 'Wonder Woman', 'Iron Man', 'Captain America',
    'Black Widow', 'Thor', 'Hulk', 'Flash', 'Green Lantern', 'Aquaman', 'Wolverine',
    'Deadpool', 'Black Panther', 'Ant-Man', 'Doctor Strange', 'Captain Marvel',
    'Scarlet Witch', 'Hawkeye', 'Green Arrow', 'The Flash', 'Cyclops', 'Nightcrawler',
    'Storm', 'Jean Grey', 'Professor X', 'Beast', 'Rogue', 'Gambit'
];

function randomHeroe() {
    return Math.floor(Math.random() * superheroes.length);
}

function name() {
    var randomIndex = randomHeroe();
    return superheroes[randomIndex];
}

function email() {
    var randomIndex = randomHeroe();
    return `${superheroes[randomIndex].replace(/\s+/g, '').toLowerCase()}@testmail.com`
}

function password() {
    return `password-${Math.random()}-test`
}

function image() {
    return `image-${Math.random()}-test`
}

function text() {
    return `text=${Math.random()}-test`
}

const random = {
    randomHeroe,
    name,
    email,
    password,
    image,
    text
}

export default random