
import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-workers-managment',
  templateUrl: './workers-managment.component.html',
  styleUrls: ['./workers-managment.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WorkersManagmentComponent{
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Name', 'Date', 'Detials', 'Edit'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;
}

export interface PeriodicElement {
  Name: string;
  Edit: string;
  Date: string;
  Detials: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Edit: 'Copy',
    Name: 'Daniel weddiing ',
    Date: '09/07/1997',
    Detials:'Tap for details...',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eveniet aspernatur sed eum, velit vero officiis qui quis debitis, fugiat distinctio consequuntur similique tenetur dignissimos! Alias facilis ea ullam molestiae?
    Repellat dignissimos ducimus unde porro quo magni laborum error, alias tempora culpa fuga provident enim soluta eos eum nisi libero ipsa nihil, at aliquam natus nostrum recusandae. Omnis, adipisci blanditiis.`,
  },
  {
    Edit: 'Copy',
    Name: 'Arnon weddiing',
    Date:'09/07/1997',
    Detials: 'Tap for details...',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eveniet aspernatur sed eum, velit vero officiis qui quis debitis, fugiat distinctio consequuntur similique tenetur dignissimos! Alias facilis ea ullam molestiae?
    Repellat dignissimos ducimus unde porro quo magni laborum error, alias tempora culpa fuga provident enim soluta eos eum nisi libero ipsa nihil, at aliquam natus nostrum recusandae. Omnis, adipisci blanditiis.`,
  },
  {
    Edit: 'Copy',
    Name: 'Yisroel weddiing',
    Date: '09/07/1997',
    Detials: 'Tap for details...',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eveniet aspernatur sed eum, velit vero officiis qui quis debitis, fugiat distinctio consequuntur similique tenetur dignissimos! Alias facilis ea ullam molestiae?
    Repellat dignissimos ducimus unde porro quo magni laborum error, alias tempora culpa fuga provident enim soluta eos eum nisi libero ipsa nihil, at aliquam natus nostrum recusandae. Omnis, adipisci blanditiis.`,
  },
  {
    Edit: 'Copy',
    Name: 'Open Uni Homecoming',
    Date:'09/07/1997',
    Detials: 'Tap for details...',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eveniet aspernatur sed eum, velit vero officiis qui quis debitis, fugiat distinctio consequuntur similique tenetur dignissimos! Alias facilis ea ullam molestiae?
    Repellat dignissimos ducimus unde porro quo magni laborum error, alias tempora culpa fuga provident enim soluta eos eum nisi libero ipsa nihil, at aliquam natus nostrum recusandae. Omnis, adipisci blanditiis.`,
  },
  {
    Edit: 'Copy',
    Name: 'Someone died',
    Date:'09/07/1997',
    Detials:'Tap for details...',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eveniet aspernatur sed eum, velit vero officiis qui quis debitis, fugiat distinctio consequuntur similique tenetur dignissimos! Alias facilis ea ullam molestiae?
    Repellat dignissimos ducimus unde porro quo magni laborum error, alias tempora culpa fuga provident enim soluta eos eum nisi libero ipsa nihil, at aliquam natus nostrum recusandae. Omnis, adipisci blanditiis.`,
  },
  {
    Edit: 'Copy',
    Name: 'Tel Aviv, "Having More Thai Gay" celebration',
    Date: '09/07/1997',
    Detials:'Tap for details...',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eveniet aspernatur sed eum, velit vero officiis qui quis debitis, fugiat distinctio consequuntur similique tenetur dignissimos! Alias facilis ea ullam molestiae?
    Repellat dignissimos ducimus unde porro quo magni laborum error, alias tempora culpa fuga provident enim soluta eos eum nisi libero ipsa nihil, at aliquam natus nostrum recusandae. Omnis, adipisci blanditiis.`,
  },
  {
    Edit: 'Copy',
    Name: 'Thais work in Israel farms',
    Date: '09/07/1997',
    Detials:'Tap for details...',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eveniet aspernatur sed eum, velit vero officiis qui quis debitis, fugiat distinctio consequuntur similique tenetur dignissimos! Alias facilis ea ullam molestiae?
    Repellat dignissimos ducimus unde porro quo magni laborum error, alias tempora culpa fuga provident enim soluta eos eum nisi libero ipsa nihil, at aliquam natus nostrum recusandae. Omnis, adipisci blanditiis.`,
  },

];

