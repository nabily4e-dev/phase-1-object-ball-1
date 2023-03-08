// function gameObject(homeTeam, awayTeam) {
// 	return {
// 		home: {
// 			teamName: homeTeam.teamName,
// 			colors: homeTeam.colors,
// 			players: homeTeam.players.reduce((obj, player) => {
// 				obj[player.name] = {
// 					number: player.number,
// 					shoe: player.shoe,
// 					points: player.points,
// 					rebounds: player.rebounds,
// 					assists: player.assists,
// 					steals: player.steals,
// 					blocks: player.blocks,
// 					slamDunks: player.slamDunks,
// 				};
// 				return obj;
// 			}, {}),
// 		},
// 		away: {
// 			teamName: awayTeam.teamName,
// 			colors: awayTeam.colors,
// 			players: awayTeam.players.reduce((obj, player) => {
// 				obj[player.name] = {
// 					number: player.number,
// 					shoe: player.shoe,
// 					points: player.points,
// 					rebounds: player.rebounds,
// 					assists: player.assists,
// 					steals: player.steals,
// 					blocks: player.blocks,
// 					slamDunks: player.slamDunks,
// 				};
// 				return obj;
// 			}, {}),
// 		},
// 	};
// }

// // console.log(gameObject())

// const homeTeam = {
//     teamName: "Brooklyn Nets",
//     colors: ["Black", "White"],
//     players: [
//       {name: "Alan Anderson", number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1},
//       {name: "Reggie Evans", number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7},
//       {name: "Brook Lopez", number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15},
//       {name: "Mason Plumlee", number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5},
//       {name: "Jason Terry", number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1},
//     ]
//   };
//   const awayTeam = {
//     teamName: "Charlotte Hornets",
//     colors: ["Turquoise", "Purple"],
//     players: [
//       {name: "Jeff Adrien", number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2},
//       {name: "Bismak Biyombo", number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10},
//       {name: "DeSagna Diop", number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5},
//       {name: "Ben Gordon", number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0},
//       {name: "Brendan Haywood", number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12},
//     ]
//   };

//   const game = gameObject(homeTeam, awayTeam);
// //   console.log(game);

//   function homeTeamName() {
//     let object = game;
//     return object["home"]["teamName"];
//   }

//   console.log(homeTeamName());

function gameObject() {
	return {
		home: {
			teamName: 'Brooklyn Nets',
			colors: ['Black', 'White'],
			players: {
				AlanAnderson: {
					number: 0,
					shoe: 16,
					points: 22,
					rebounds: 12,
					assists: 12,
					steals: 3,
					blocks: 1,
					slamDunks: 1,
				},
				ReggieEvans: {
					number: 30,
					shoe: 14,
					points: 12,
					rebounds: 12,
					assists: 12,
					steals: 12,
					blocks: 12,
					slamDunks: 7,
				},
				BrookLopez: {
					number: 11,
					shoe: 17,
					points: 17,
					rebounds: 19,
					assists: 10,
					steals: 3,
					blocks: 1,
					slamDunks: 15,
				},
				MasonPlumlee: {
					number: 1,
					shoe: 19,
					points: 26,
					rebounds: 12,
					assists: 6,
					steals: 3,
					blocks: 8,
					slamDunks: 5,
				},
				JasonTerry: {
					number: 31,
					shoe: 15,
					points: 19,
					rebounds: 2,
					assists: 2,
					steals: 4,
					blocks: 11,
					slamDunks: 1,
				},
			},
		},
		away: {
			teamName: 'Charlotte Hornets',
			colors: ['Turquoise', 'Purple'],
			players: {
				JeffAdrien: {
					number: 4,
					shoe: 18,
					points: 10,
					rebounds: 1,
					assists: 1,
					steals: 2,
					blocks: 7,
					slamDunks: 2,
				},
				BismakBiyombo: {
					number: 0,
					shoe: 16,
					points: 12,
					rebounds: 4,
					assists: 7,
					steals: 7,
					blocks: 15,
					slamDunks: 10,
				},
				DeSagnaDiop: {
					number: 2,
					shoe: 14,
					points: 24,
					rebounds: 12,
					assists: 12,
					steals: 4,
					blocks: 5,
					slamDunks: 5,
				},
				BenGordon: {
					number: 8,
					shoe: 15,
					points: 33,
					rebounds: 3,
					assists: 2,
					steals: 1,
					blocks: 1,
					slamDunks: 0,
				},
				BrendanHaywood: {
					number: 33,
					shoe: 15,
					points: 6,
					rebounds: 12,
					assists: 12,
					steals: 22,
					blocks: 5,
					slamDunks: 12,
				},
			},
		},
	}
}

// console.log(gameObject())

// function printHomeTeamPlayers() {
// 	const game = gameObject()
// 	for (let player in game.home.players) {
// 		console.log(`Name: ${player}, Number: ${game.home.players[player].number}`)
// 	}
// }

// printHomeTeamPlayers()

// function getHomeTeamInfo() {
// 	const game = gameObject()
// 	const homeTeam = Object.values(game.home)
// 	console.log(`Team Name: ${homeTeam[0]}, Colors: ${homeTeam[1]}`)
// }

// getHomeTeamInfo()

// function printAwayTeamPlayers() {
// 	const game = gameObject()
// 	for (let player in game.away.players) {
// 		console.log(`Name: ${player}, Number: ${game.away.players[player].number}`)
// 	}
// }

// printAwayTeamPlayers()

// function getAwayTeamInfo() {
// 	const game = gameObject()
// 	const awayTeam = Object.values(game.away)
// 	console.log(`Team Name: ${awayTeam[0]}, Colors: ${awayTeam[1]}`)
// }

// getAwayTeamInfo()

// console.log()
// console.log()
// console.log()

// // Accessing team name of the home team
// const homeTeamName = gameObject().home.teamName
// console.log(homeTeamName) // "Brooklyn Nets"

// // Accessing the number of points scored by Alan Anderson
// const alanAndersonPoints = gameObject().home.players.AlanAnderson.points
// console.log(alanAndersonPoints) // 22

// // Updating the number of assists by Brendan Haywood
// gameObject().away.players.BrendanHaywood.assists = 15

// Returns the shoe size for a given player name
function shoeSize(playerName, gameObj) {
	const teamNames = Object.keys(gameObj) // ['home', 'away']
	for (let i = 0; i < teamNames.length; i++) {
		const players = gameObj[teamNames[i]].players
		if (players.hasOwnProperty(playerName)) {
			return players[playerName].shoe
		}
	}
	return null
}

// Returns the team colors for a given team name
function teamColors(teamName, gameObj) {
	const teamNames = Object.keys(gameObj) // ['home', 'away']
	for (let i = 0; i < teamNames.length; i++) {
		if (gameObj[teamNames[i]].teamName === teamName) {
			return gameObj[teamNames[i]].colors
		}
	}
	return null
}

// Returns the team name that has the player with the largest shoe size
function bigShoeTeam(gameObj) {
	const teamNames = Object.keys(gameObj) // ['home', 'away']
	let biggestShoeSize = 0
	let teamNameWithBiggestShoeSizePlayer = null
	for (let i = 0; i < teamNames.length; i++) {
		const players = gameObj[teamNames[i]].players
		const playerNames = Object.keys(players)
		for (let j = 0; j < playerNames.length; j++) {
			const player = players[playerNames[j]]
			if (player.shoe > biggestShoeSize) {
				biggestShoeSize = player.shoe
				teamNameWithBiggestShoeSizePlayer = gameObj[teamNames[i]].teamName
			}
		}
	}
	return teamNameWithBiggestShoeSizePlayer
}

console.log(shoeSize('BismakBiyombo', gameObject())) // Output: 16
console.log(teamColors('Charlotte Hornets', gameObject())) // Output: ["Turquoise", "Purple"]
console.log(bigShoeTeam(gameObject())) // Output: "Charlotte Hornets"
