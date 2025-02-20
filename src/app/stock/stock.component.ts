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
    { name: 'Formal wear', image: '/troubleshoot.png' },
    { name: 'Crop top', image: '/troubleshoot.png' },
    { name: 'Bodycon', image: '/troubleshoot.png' },
    { name: 'Dress', image: '/troubleshoot.png' },
    { name: 'Blazers', image: '/troubleshoot.png' },
    { name: 'Winter wear', image: '/troubleshoot.png' },
    { name: 'Jumpsuit', image: '/troubleshoot.png' },
    { name: 'Formal wear', image: '/troubleshoot.png' }
  ];
}
