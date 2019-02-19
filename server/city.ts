import {Player} from "./player";
import {PowerLine} from "./power-line";

export class City {
  tenOccupant: Player;
  fifteenOccupant: Player;
  twentyOccupant: Player;
  connections: PowerLine[];
}
