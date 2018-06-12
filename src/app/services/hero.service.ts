import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs/Observable';
import { catchError, tap, map } from 'rxjs/operators';
import { Hero } from '../models/hero';
import { Post } from '../models/post';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetched heroes'))
      );
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
