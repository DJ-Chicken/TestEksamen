import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project 1',
      img: '../../assets/images/Project.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      title: 'Project 2',
      img: '../../assets/images/Project.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      title: 'Project 3',
      img: '../../assets/images/Project.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      title: 'Project 4',
      img: '../../assets/images/Project.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
  ];
}
