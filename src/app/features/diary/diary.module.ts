import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiaryRoutingModule } from './diary-routing.module';
import { WeekCalendarComponent } from './components/week-calendar/week-calendar.component';

import { NgIconsModule } from '@ng-icons/core';
import {
  heroChevronLeftSolid,
  heroChevronRightSolid,
} from '@ng-icons/heroicons/solid';

@NgModule({
  declarations: [
    WeekCalendarComponent,
    // Add other components if needed
  ],
  imports: [
    CommonModule,
    FormsModule,
    DiaryRoutingModule,
    NgIconsModule.withIcons({
      heroChevronLeftSolid,
      heroChevronRightSolid,
    }),
  ],
})
export class DiaryModule {}
