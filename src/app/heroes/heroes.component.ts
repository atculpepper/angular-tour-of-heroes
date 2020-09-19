import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//bring in the list of heroes
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //hero is a type, with an interface imported from ../hero
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  //defining component property to expose HEROES array for binding
  heroes = HEROES;

  constructor() {}

  ngOnInit(): void {}
}
