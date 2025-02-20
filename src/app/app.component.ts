import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CollectionsComponent } from './collections/collections.component';
import { StockComponent } from './stock/stock.component';
import { NewDressComponent } from './newDress/newDress.component';
import { OfferComponent } from './offer/offer.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { FooterComponent } from './footer/footer.component';
import { NationalComponent } from './national/national.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,CollectionsComponent,StockComponent,NewDressComponent,OfferComponent,BestsellerComponent,FooterComponent,NationalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FashionBotique';
}
