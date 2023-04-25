const team = {
    _players: [
      { firstName: "Lumi", lastName: "Ion", age: 23 },
      { firstName: "Ada", lastName: "Ionescu", age: 22 },
      { firstName: "Adi", lastName: "Margineanu", age: 25 },
    ],
    _games: [
      { opponent: "Cristi", teamPoints: 12, opponentPoints: 24 },
      { opponent: "Darla", teamPoints: 24, opponentPoints: 12 },
      { opponent: "Alice", teamPoints: 10, opponentPoints: 10 },
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this._games.push(game);
    },
  };
  
  team.addPlayer("Ada", "Min", 31);
  team.addGame("Hockey", 100, 98);
  console.log(team.games);
  