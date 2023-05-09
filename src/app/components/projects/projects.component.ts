import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Prosjekt 1',
      img: '../../assets/images/Project.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      title: 'Prosjekt 2',
      img: '../../assets/images/Project.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      title: 'Prosjekt 3',
      img: '../../assets/images/Project.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      title: 'Prosjekt 4',
      img: '../../assets/images/Project.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
  ];
}
