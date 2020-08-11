const players = [
    { name: 'Cristiano Ronaldo', club: 'Juventus' },
    { name: 'Lionel Messi', club: 'FC Barcelona' },
    { name: 'Robert Lewandowski', club: 'Bayern Munich' }
];

function getPlayers(){
    setTimeout(() => {
        players.forEach((players) => {
            console.log(players.name);
        });
    }, 1000);
}

function addPlayer(player) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            players.push(player);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('No player found!');
            }
        }, 2000);
    });
}

addPlayer({ name: 'Kevin De Bruyne', club: 'Manchester City' })
    .then(getPlayers)
    .catch(error => console.log(error));
