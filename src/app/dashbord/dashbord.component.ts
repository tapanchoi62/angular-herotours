import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  heros :Hero[] =[];
  constructor(private HeroService:HeroService) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(){
    this.HeroService.getHeros().subscribe(
      hero => this.heros =hero.slice(1,5)
    );
  }
}
