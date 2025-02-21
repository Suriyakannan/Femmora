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
      image: '/Frame 1984077517.png',
      // discount: '45% OFF',
      title: 'Colored crop top',
      oldPrice: '$512.58',
      newPrice: '$230.00',
      rating: '4.5 (18)',
      colors: ['#FC7474', '#892CEB', '#6FE5FF']
    },
    {
      image: '/Frame 1984077517 (1).png',
      // discount: '45% OFF',
      title: 'Colored crop top',
      rating: '4.5 (18)',
      oldPrice: '$512.58',
      newPrice: '$230.00',
      colors: ['#FC7474', '#892CEB', '#6FE5FF']
    },
    {
      image: '/Frame 1984077517 (2).png',
      // discount: '45% OFF',
      title: 'Colored crop top',
      oldPrice: '$512.58',
      newPrice: '$230.00',
      rating: '4.5 (18)',
      colors: ['#FC7474', '#892CEB', '#6FE5FF']
    },
    {
      image: '/Frame 1984077517.png',
      // discount: '45% OFF',
      title: 'Colored crop top',
      oldPrice: '$512.58',
      newPrice: '$230.00',
      rating: '4.5 (18)',
      colors: ['#FC7474', '#892CEB', '#6FE5FF']
    },
    {
      image: '/Frame 1984077517 (1).png',
      // discount: '45% OFF',
      title: 'Colored crop top',
      oldPrice: '$512.58',
      newPrice: '$230.00',
      rating: '4.5 (18)',
      colors: ['#FC7474', '#892CEB', '#6FE5FF']
    }
   
  ];
}
