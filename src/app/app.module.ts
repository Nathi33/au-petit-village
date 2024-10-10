import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';

// Permet d'importer les paramètres régionaux français (localeFr), contenant des informations sur la monnaie, la date, et le format numérique propres à la France.
import localeFr from '@angular/common/locales/fr';
// Permet d'enregistrer les paramètres régionaux importé localeFr
import { registerLocaleData } from '@angular/common';
// Injection token (= clé servant à identifier une valeur ou un service) fourni par Angular permettant de définir la locale par défaut de l'application
import { LOCALE_ID } from '@angular/core';

import { SortByPricePipe } from './sort-by-price.pipe';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { FooterComponent } from './footer/footer.component';
import { UnitCmPipe } from './unit-cm.pipe';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    CartComponent,
    SortByPricePipe,
    FilterByNamePipe,
    FooterComponent,
    UnitCmPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
