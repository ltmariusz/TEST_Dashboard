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
      icon: 'email-outline',
      children: [
        {
          title: 'Nowe Zaproszenia',
          link: 'invate/add',
          icon: 'plus'
        },
        {
          title: 'Oczekujące',
          link: 'invate/pending',
          icon: 'flip-2'
        },
      ],
    },
    {
      title: 'Admin',
      expanded: false,
      icon: 'person-outline',
      children: [
        {
          title: 'Dodawanie',
          link: 'admin/add',
          icon: 'person-add-outline'
        },
        {
          title: 'Lista',
          link: 'admin/list',
          icon: 'list'
        }
      ]
    },
  ];
 


}
