import { Stage } from './stage';
import { Player } from './player';
import { Map } from './map';

interface GameSetup {
  regions: number,
  randomlyRemovedPowerPlants: number,
  maxPlantsOwnedByPlayer: number,
  citiesToTriggerStageTwo: number,
  citiesToTriggerGameEnd: number
}

const SETUPS: GameSetup[] = [
  null,
  null,
  {
    regions: 3,
    randomlyRemovedPowerPlants: 8,
    maxPlantsOwnedByPlayer: 4,
    citiesToTriggerStageTwo: 10,
    citiesToTriggerGameEnd: 21
  },
  {
    regions: 3,
    randomlyRemovedPowerPlants: 8,
    maxPlantsOwnedByPlayer: 3,
    citiesToTriggerStageTwo: 7,
    citiesToTriggerGameEnd: 17
  },
  {
    regions: 4,
    randomlyRemovedPowerPlants: 4,
    maxPlantsOwnedByPlayer: 3,
    citiesToTriggerStageTwo: 7,
    citiesToTriggerGameEnd: 17
  },
  {
    regions: 5,
    randomlyRemovedPowerPlants: 0,
    maxPlantsOwnedByPlayer: 3,
    citiesToTriggerStageTwo: 7,
    citiesToTriggerGameEnd: 15
  },
  {
    regions: 5,
    randomlyRemovedPowerPlants: 0,
    maxPlantsOwnedByPlayer: 3,
    citiesToTriggerStageTwo: 6,
    citiesToTriggerGameEnd: 14
  }
];

export enum GameStatus {
  IN_PROGRESS,
  COMPLETED
}

export class Game {
  round: number;
  status: GameStatus;
  stage: Stage;
  players: Player[];

  private setup: GameSetup;
  private map: Map;

  constructor(config: {
    round: number,
    stage: Stage,
    map: Map,
    players: Player[]
  }) {
    this.round = config.round;
    this.stage = config.stage;
    this.map = config.map;
    this.players = config.players;

    if (this.players.length < 2 || this.players.length > 6) {
      throw new Error('there must be between 2 and 6 players (inclusive) in a game');
    }
    this.setup = SETUPS[this.players.length];
    if (this.players.some(player => (player.numberOfHouses >= this.setup.citiesToTriggerGameEnd))) {
      this.status = GameStatus.COMPLETED;
    } else {
      this.status = GameStatus.IN_PROGRESS;
    }

    this.verifyMapWithPlayers();
  }

  private verifyMapWithPlayers() {
    let playerTracker = {};
    for (let i = 0; i < this.players.length; i++) {
      playerTracker[this.players[i].name] = 0;
    }
    for (let j = 0; j < this.map.cities.length; j++) {
      const c = this.map.cities[j];
      ['tenOccupant', 'fifteenOccupant', 'twentyOccupant'].map(key => {
        if (c[key]) {
          playerTracker[c[key].name]++;
        }
      });
    }
    for (let i = 0; i < this.players.length; i++) {
      if (playerTracker[this.players[i].name] !== this.players[i].numberOfHouses) {
        throw new Error('The map and player objects are inconsistent');
      }
    }

    // TODO: verify that all cities owned by a player are connected
  }
}
