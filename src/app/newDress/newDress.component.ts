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
    { name: 'Euphoria Crop Blouse', price: 'Rp. 194,000', image: '/356039326_816908229869602_5989506973685575536_n 1.png' },
    { name: 'Venus Halter Dress', price: 'Rp. 180,000', image: '/352158854_3608341479451255_1472828259758897531_n 1.png' },
    { name: 'Snap Pure Blouse', price: 'Rp. 194,000', image: '/355278786_1944515739251375_2601576688677791938_n 1.png' },
    { name: 'Euphoria Crop Blouse', price: 'Rp. 194,000', image: '/356039326_816908229869602_5989506973685575536_n 1.png' },
    { name: 'Venus Halter Dress', price: 'Rp. 180,000', image: '/352158854_3608341479451255_1472828259758897531_n 1.png' },
    { name: 'Snap Pure Blouse', price: 'Rp. 194,000', image: '/355278786_1944515739251375_2601576688677791938_n 1.png' }

  ];
}
