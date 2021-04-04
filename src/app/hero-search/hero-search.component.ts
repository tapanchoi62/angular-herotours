import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  
  herosearch: Hero;

  constructor(private HeroService: HeroService, private Router: Router) { }

  ngOnInit() {
  }

  findhero(herosearch) {
    let hero = this.HeroService.search(herosearch.name);
    console.log(hero);
    
  }

}
