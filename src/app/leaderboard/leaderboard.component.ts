import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  readonly players: any[] = [
    {
      name: 'Metuzals',
      deathRate: '1',
      KDA: '100'
    },
    {
      name: 'Pqqqqqqq',
      deathRate: '80',
      KDA: '2'
    },
    {
      name: 'Master Slew',
      deathRate: '100',
      KDA: '5'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
