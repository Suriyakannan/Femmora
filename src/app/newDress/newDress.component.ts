import { Component } from '@angular/core';

@Component({
  selector: 'app-newDress',
  standalone: true,
  imports: [],
  templateUrl: './newDress.component.html',
  styleUrl: './newDress.component.scss'
})
export class NewDressComponent {
  dresses = [
    { name: 'Euphoria Crop Blouse', price: 'Rp. 194,000', image: '/troubleshoot.png' },
    { name: 'Venus Halter Dress', price: 'Rp. 180,000', image: '/troubleshoot.png' },
    { name: 'Snap Pure Blouse', price: 'Rp. 194,000', image: '/troubleshoot.png' }
  ];
}
