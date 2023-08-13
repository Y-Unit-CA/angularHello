import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { Observable} from 'rxjs';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  // selectedHero ?: Hero;

  /* Auto wiring in shorthand constructor */
  //constructor(private heroService: HeroService) {}

  /* Auto wiring in longhand constructor */
  // constructor(heroService : HeroService) {
  //   this.heroService = heroService;
  // }

  // constructor(private heroService: HeroService, private messageService: MessageService) { }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.populateHeroes();  // renaming it to populateHeroes() from getHeroes() for clarity
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // } 

  // // keeping getHeroes() here is ok
  // populateHeroes(): void {
  //   // changed the syntax from anoynomous functions to named function 
  //   // to hopefully make it easier to read
  //   // but there is nothing wrong with what the instructions said
  //   let obs: Observable <Hero[]> = this.heroService.getHeroes();
  //   obs.subscribe(this.populateHeroesByParam); 
  // }

  populateHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // populateHeroesByParam(heroesToPopulate : Hero[]) : void {
  //   this.heroes = heroesToPopulate;
  // }
}
