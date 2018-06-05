import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.heroService.getPosts().subscribe(
      posts => {
        console.log(posts);
      }
    )
  }

}
