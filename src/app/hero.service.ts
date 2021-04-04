import { HeroVM } from './HeroVM';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/operators'
import { catchError } from 'rxjs/operators';


const apiUrl = 'http://localhost:5000/api';
@Injectable({
  providedIn: 'root'
})
export class HeroService {


   constructor(private MessageService:MessageService,private http:HttpClient) { }





  getHeros(): Observable< Hero[]>{

    return  this.http.get<Hero[]>('http://localhost:5000/api/hero');

  }
  getHero(id:number):Observable<Hero>{
    // this.MessageService.addMessage(`Heroservice:get Hero {{id}}`);
    // const hero = HEROES.find( a => a.id == id);
    // return of(hero);
    return this.http.get<Hero>(`http://localhost:5000/api/hero/getbyid/${id}`);

  }

    save(hero):Observable<Hero>{
      // let findhero = HEROES.find(a=>a.id==hero.id)
      // let index = HEROES.indexOf(findhero);
      // // HEROES[index]=hero;
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

      let body = JSON.stringify(hero );
      console.log(body);


      return this.http.post<Hero>('http://localhost:5000/api/hero/update',body, {headers: headers});
      // let body = JSON.stringify(hero );
      // console.log(body);

      //  return this.http.post<Hero>(`http://localhost:5000/api/hero/update`,body,this.httpOptions);



    }

  // delete(hero){
  //   let index = HEROES.indexOf(hero)
  //   HEROES.splice(index,1);
  // }
  delete(id):Observable<Hero>{
    return this.http.delete<Hero>(`http://localhost:5000/api/hero/delete/${id}`);
  }

  search(name: string):Observable<HeroVM[]>{
    // let findhero = HEROES.find(a => a.name = name);
    // return findhero;
    // return this.http.get<Hero[]>(`http://localhost:5000/api/hero/getbyname/${name}`)
    // .pipe(catchError(this.handlerError));
    return this.http.get<HeroVM[]>(`http://localhost:5000/api/hero/getbyname/${name}`);


  }
  private handlerError(err){
    return throwError(err.message);
  }
}
