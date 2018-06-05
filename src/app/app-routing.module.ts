import { SlideComponent } from './slide/slide.component';
import { MoodleComponent } from './moodle/moodle.component';
import { VideoComponent } from './video/video.component';
import { TextComponent } from './text/text.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextRequestComponent } from './text-request/text-request.component';

const routes: Routes = [
  { path : '', redirectTo : '/text-request', pathMatch : 'full' },
  { path : 'text-responce',  component : TextComponent },
  { path : 'text-request', component : TextRequestComponent },
  { path : 'video', component : VideoComponent },
  { path : 'moodle', component : MoodleComponent },
  { path : 'slide', component : SlideComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports : [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
