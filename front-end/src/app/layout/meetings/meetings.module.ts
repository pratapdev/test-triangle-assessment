import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './components/meetings/meetings.component';

@NgModule({
  declarations: [MeetingsComponent],
  imports: [
    CommonModule,
    MeetingsRoutingModule
  ]
})
export class MeetingsModule { }
