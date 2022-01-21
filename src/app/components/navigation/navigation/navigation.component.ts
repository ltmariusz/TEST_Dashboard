import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: NbMenuItem[] = [
    {
      title: 'Zaproszenia',
      expanded: false,
      children: [
        {
          title: 'Nowe Zaproszenia',
          link: '/pages/invate/add'
        },
        {
          title: 'Oczekujące',
        },
      ],
    },
    {
      title: 'Admin',
      expanded: false,
      children: [
        {
          title: 'Dodawanie'
        },
        {
          title: 'Lista',
          expanded: false,
          children:[
            {
              title: 'Edycja'
            }
          ]
        }
      ]
    },
  ];



}
