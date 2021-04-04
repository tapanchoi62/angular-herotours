import { HeroService } from './../hero.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero:Hero;

  constructor(
    private route:ActivatedRoute,
    private HeroService:HeroService,
    private location:Location
  ) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.HeroService.getHero(id).subscribe(
      hero =>this.hero = hero
    );


  }

  goBack(){
    this.location.back();

  }

  Save(hero){
    this.HeroService.save(hero).subscribe((result) => {

  });
  }
}
