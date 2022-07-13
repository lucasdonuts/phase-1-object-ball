const game = gameObject();

function gameObject () {
  const game = {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        'Mason Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        'Jason Terry': {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        'DeSagna Diop': {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        'Ben Gordon': {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        'Brendan Haywood': {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        },
      }
    }
  }

  return game;
}

function numPointsScored(playerName) {
  if (game.home.players[playerName]) {
    return game.home.players[playerName].points;
  } else {
    return game.away.players[playerName].points;
  }
}

function shoeSize(playerName) {
  if (game.home.players[playerName]) {
    return game.home.players[playerName].shoe;
  } else {
    return game.away.players[playerName].shoe;
  }
}

function teamColors(teamName) {
  return game.home.teamName === teamName ? game.home.colors : game.away.colors;
}

function teamNames() {
  const teams = [];

  for(const key in game) {
    teams.push(game[key].teamName);
  }
  return teams;
}

function playerNumbers(teamName) {
  const numbers = [];

  if(game.home.teamName === teamName) {
    const players = game.home.players;

    for(const player in players) {
      numbers.push(game.home.players[player].number);
    }

    return numbers;
  } else {
    const players = game.away.players;

    for(const player in players) {
      numbers.push(game.away.players[player].number);
    }

    return numbers;
  }
}

function playerStats(playerName) {
  if(game.home.players[playerName]) {
    return game.home.players[playerName];
  } else {
    return game.away.players[playerName];
  }
}

function bigShoeRebounds() {
  let rebounds = 0;
  let biggestShoe = 0;

  for(const team in game) {
    for(const player in game[team].players) {
      let shoeSize = game[team].players[player].shoe
      if (shoeSize > biggestShoe) {
        biggestShoe = game[team].players[player].shoe;
        rebounds = game[team].players[player].rebounds;
      }
    }
  }

  return rebounds;
}

console.log(bigShoeRebounds());