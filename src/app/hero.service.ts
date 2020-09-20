import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  constructor(private messageService: MessageService) {}
  //Angular will inject the singleton MessageService into that property when it creates the HeroService
}
