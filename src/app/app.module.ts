import { HeroService } from './hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { BarRatingModule } from 'ngx-bar-rating';
 

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { TextComponent } from './text/text.component';
import { VideoComponent } from './video/video.component';
import { MoodleComponent } from './moodle/moodle.component';
import { SlideComponent } from './slide/slide.component';
import { TextResultComponent } from './text-result/text-result.component';
import { TextRequestComponent } from './text-request/text-request.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,
    TextComponent,
    VideoComponent,
    MoodleComponent,
    SlideComponent,
    TextResultComponent,
    TextRequestComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientInMemoryWebApiModule,
    HttpClientModule,
    AppRoutingModule,
    BarRatingModule

    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation : false }
    // )
  ],
  providers: [MessageService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
