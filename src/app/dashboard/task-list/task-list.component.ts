import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    { name: 'Pricing Card Developing', startDate: '14-Mar-24', dueDate: '25-Mar-24', priority: 'High', status: 'Ongoing' },
    { name: 'Finance Dashboard', startDate: '10-Mar-24', dueDate: '21-Mar-24', priority: 'Medium', status: 'Done' }
  ];
}
