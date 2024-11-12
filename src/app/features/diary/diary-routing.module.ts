import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekCalendarComponent } from './components/week-calendar/week-calendar.component';

const routes: Routes = [
  { path: '', component: WeekCalendarComponent },
  // Add other routes if necessary
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryRoutingModule {}
