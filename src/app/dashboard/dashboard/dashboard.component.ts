import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  tasks = {
    todo: [
      { category: 'Design System', title: 'Hero Section', description: 'Create a design system for a hero section in 2 different variants.' , badges: ['VH', 'AG'] ,status: 'success'},
      { category: 'Typography', title: 'Typography Change', description: 'Modify typography and styling of text placed on 6 screens of the website design.', badges: ['ML'],status: 'primary' }
    ],
    inProgress: [
      { category: 'Development', title: 'Implement Design Screens', description: 'Our designers created 6 screens for a website that needs to be implemented by our dev team.', badges: ['VH', 'LK'] ,status: 'danger' }
    ],
    done: [
      { category: 'Development', title: 'Fix Bugs in CSS', description: 'Fix small bugs that are essential to prepare for the next release.',badges: ['HU', 'NL'] ,status: 'danger'},
      { category: 'Typography', title: 'Proofread Final Text', description: 'The text provided by the marketing department needs to be proofread to fit our design.',badges: ['AG'] ,status: 'primary'},
      { category: 'Design System', title: 'Responsive design', description: 'All designs need to be responsive. The requirment is that it first all web and mobile screens',badges: ['VH', 'AG'] ,status: 'success' }
    ]
  };

}
