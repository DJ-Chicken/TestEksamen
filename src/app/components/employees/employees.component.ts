import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  employees = [
    {
      name: 'John Doe',
      position: 'CEO',
      img: '../../assets/images/Employee1.png',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      name: 'John Doe',
      position: 'CEO',
      img: '../../assets/images/Employee2.png',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      name: 'John Doe',
      position: 'CEO',
      img: '../../assets/images/Employee3.png',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      name: 'John Doe',
      position: 'CEO',
      img: '../../assets/images/Employee4.png',
      description: 'Lorem ipsum dolor sit amet',
    },
  ];
}
