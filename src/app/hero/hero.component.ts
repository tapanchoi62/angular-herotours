import { HeroService } from './../hero.service';
import { HEROES } from './../mock-heros';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HeroVM } from '../HeroVM';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heros : Hero[];

  pageOfItems: Array<any>;
  selectedHero: Hero;
  herosearch:HeroVM[];
  textsearch:string;
  constructor(private HeroService:HeroService) { }



  getHeros(){
    this.HeroService.getHeros().subscribe(
      a => this.heros= a
    );
  }
  ngOnInit() {
     this.getHeros();

  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }



  onSelect(hero: Hero){
      this.selectedHero=hero;
      console.log(this.selectedHero);
  }

  delete(hero :Hero){


      this.HeroService.delete(hero.id).subscribe();
      this.heros = this.heros.filter(h => h !== hero);
  }

  search(textsearch : string){
    this.HeroService.search(textsearch).subscribe(
      a => this.herosearch= a
    );
    console.log(this.herosearch);

  }
}
