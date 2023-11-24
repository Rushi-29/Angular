import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  courses = [
    {
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular framework.',
      imageUrl: 'https://placekitten.com/300/200' // Replace with your course image URL
    },
    {
      title: 'Advanced JavaScript Concepts',
      description: 'Deep dive into advanced JavaScript concepts.',
      imageUrl: 'https://placekitten.com/300/201' // Replace with your course image URL
    },
    // Add more courses as needed
  ];
}
