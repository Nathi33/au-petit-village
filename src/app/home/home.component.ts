import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../presentation.service';

interface Figurine {
  name: string;
  price: number;
  imageUrl: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  presentations: any[] = [];
  constructor(private presentationService: PresentationService) {}

  ngOnInit(): void {
    this.presentations = this.presentationService.presentations;
  }

  searchTerm: string = '';
  isAscending: boolean | null = null; // Définir si l'ordre est croissant ou décroissant

  // Tableau de figurines
  figurines: Figurine[] = [
    {
      name: 'Astérix',
      price: 44.99,
      imageUrl: '../../assets/images/Asterix.jpg',
      alt: 'Figurine représentant Astérix',
    },
    {
      name: 'Obélix',
      price: 43.99,
      imageUrl: '../../assets/images/Obelix.jpg',
      alt: 'Figurine représentant Obélix',
    },
    {
      name: 'Panoramix',
      price: 54.99,
      imageUrl: '../../assets/images/Panoramix.jpg',
      alt: 'Figurine représentant Panoramix',
    },
    {
      name: 'Idéfix',
      price: 39.99,
      imageUrl: '../../assets/images/Idefix.jpg',
      alt: 'Figurine représentant Idéfix',
    },
    {
      name: 'Assurancetourix',
      price: 61.99,
      imageUrl: '../../assets/images/Assurancetourix.jpg',
      alt: 'Figurine représentant Assurancetourix',
    },
    {
      name: 'Abraracourcix',
      price: 79.99,
      imageUrl: '../../assets/images/Abraracourcix.jpg',
      alt: 'Figurine représentant Abraracourcix',
    },
    {
      name: 'Falbala',
      price: 69.99,
      imageUrl: '../../assets/images/Falbala.jpg',
      alt: 'Figurine représentant Falbala',
    },
    {
      name: 'Jules César',
      price: 89.99,
      imageUrl: '../../assets/images/Jules-César.jpg',
      alt: 'Figurine représentant Agecanonix',
    },
    {
      name: 'Soldat Romain',
      price: 49.99,
      imageUrl: '../../assets/images/Soldat-romain.jpg',
      alt: 'Figurine représentant un soldat de la légion romaine',
    },
  ];

  setSortOrder(order: boolean) {
    this.isAscending = order; // Définit l'ordre de tri
  }
}
