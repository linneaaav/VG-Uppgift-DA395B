import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile {
  text: string; // Endast för utveckling
  cols: number;
  rows: number;
  /* Lägg till framtida komponenter (dess värde null?) */
}

@Component({
  selector: 'app-dashboard',
  imports: [MatGridListModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  tiles: Tile[] = [
    {text: 'Nav', cols: 5, rows: 1}, 
    {text: 'Chores', cols: 1, rows: 8},
    {text: 'WeekPlan', cols: 3, rows: 8},
    {text: 'Accomplished', cols:1, rows: 8},
    {text: 'Footer', cols: 5, rows: 1}
  ];
}
