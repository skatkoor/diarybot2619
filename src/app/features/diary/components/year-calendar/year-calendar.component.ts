import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-calendar',
  templateUrl: './year-calendar.component.html',
  styleUrls: ['./year-calendar.component.scss'],
})
export class YearCalendarComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  months: { name: string; weeks: Date[][] }[] = [];
  
  // Simulated diary entries
  diaryEntries: { date: Date; content: string }[] = [];

  ngOnInit(): void {
    this.generateYearCalendar();
    // Load diary entries
    this.loadDiaryEntries();
  }

  generateYearCalendar() {
    const monthsNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    for (let month = 0; month < 12; month++) {
      const weeks = this.generateMonthCalendar(this.currentYear, month);
      this.months.push({ name: monthsNames[month], weeks });
    }
  }

  generateMonthCalendar(year: number, month: number): Date[][] {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const weeks: Date[][] = [];
    let currentWeek: Date[] = [];

    // Fill the first week with empty days if necessary
    for (let i = 0; i < firstDay.getDay(); i++) {
      currentWeek.push(null as any);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      currentWeek.push(new Date(year, month, day));
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    // Fill the last week with empty days if necessary
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null as any);
      }
      weeks.push(currentWeek);
    }

    return weeks;
  }

  // Load diary entries
  loadDiaryEntries() {
    // For demonstration, we'll create entries on specific dates
    this.diaryEntries = [
      { date: new Date(this.currentYear, 0, 1), content: 'New Year\'s Day' },
      { date: new Date(this.currentYear, 1, 14), content: 'Valentine\'s Day' },
      // Add more entries as needed
    ];
  }

  hasEntry(date: Date): boolean {
    return this.diaryEntries.some(entry => this.isSameDate(entry.date, date));
  }

  isSameDate(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  selectDate(date: Date) {
    if (date) {
      // Navigate to the week view of the selected date
      // Implement the logic as per your application requirements
    }
  }
}
