import { Component } from '@angular/core';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent {
  stockItems = [
    { name: 'Formal wear', image: '/Group 6.png' },
    { name: 'Crop top', image: '/Group 5.png' },
    { name: 'Bodycon', image: '/Rectangle.png' },
    { name: 'Dress', image: '/Group 5 (1).png' },
    { name: 'Blazers', image: '/Rectangle (1).png' },
    { name: 'Winter wear', image: '/Rectangle (2).png' },
    { name: 'Jumpsuit', image: '/Group 5 (2).png' },
    { name: 'Formal wear', image: '/Group 6 (1).png' }
  ];
}
