import { Component } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
})
export class DiaryComponent {
  view: 'week' | 'year' = 'week'; // Default view is 'week'
}
