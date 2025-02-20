import { Component } from '@angular/core';

@Component({
  selector: 'app-bestseller',
  standalone: true,
  imports: [],
  templateUrl: './bestseller.component.html',
  styleUrl: './bestseller.component.scss'
})
export class BestsellerComponent {
  bestSellers = [
    {
      image: '/troubleshoot.png',
      discount: '45% OFF',
      title: 'Colored crop top',
      oldPrice: '$512.58',
      newPrice: '$230.00',
      rating: '4.5 (18)',
      colors: ['#FF6384', '#36A2EB', '#FFCE56']
    },
    {
      image: '/troubleshoot.png',
      discount: '45% OFF',
      title: 'Colored crop top',
      oldPrice: '$512.58',
      newPrice: '$230.00',
      rating: '4.5 (18)',
      colors: ['#FF6384', '#36A2EB', '#FFCE56']
    },
    {
      image: '/troubleshoot.png',
      discount: '45% OFF',
      title: 'Colored crop top',
      oldPrice: '$512.58',
      newPrice: '$230.00',
      rating: '4.5 (18)',
      colors: ['#FF6384', '#36A2EB', '#FFCE56']
    },
    {
      image: '/troubleshoot.png',
      discount: '45% OFF',
      title: 'Colored crop top',
      oldPrice: '$512.58',
      newPrice: '$230.00',
      rating: '4.5 (18)',
      colors: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ];
}
