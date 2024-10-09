import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../presentation.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  presentations: any[] = [];
  figurines: any[] = [];

  constructor(
    private presentationService: PresentationService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.presentations = this.presentationService.presentations;
    this.figurines = this.productsService.figurines;
  }

  searchTerm: string = '';
  isAscending: boolean | null = null; // Définir si l'ordre est croissant ou décroissant

  setSortOrder(order: boolean) {
    this.isAscending = order; // Définit l'ordre de tri
  }
}
