import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuItems = [
    { label: 'Accueil', link: '/', active: true },
    { label: 'A propos', link: '/about', active: false },
    { label: 'Contact', link: '/contact', active: false },
    { label: 'Panier', link: '/cart', active: false },
  ];
}
