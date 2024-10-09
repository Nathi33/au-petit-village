import { Injectable } from '@angular/core';

export interface Figurine {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  alt: string;
  description: string;
  material: string;
  height: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  figurines: Figurine[] = [
    {
      id: 1,
      name: 'Astérix',
      price: 44.99,
      imageUrl: '../../assets/images/Asterix.jpg',
      alt: 'Figurine représentant Astérix',
      description: "Figurine d'Astérix avec sa potion magique à sa ceinture",
      material: 'Résine',
      height: 15,
    },
    {
      id: 2,
      name: 'Obélix',
      price: 43.99,
      imageUrl: '../../assets/images/Obelix.jpg',
      alt: 'Figurine représentant Obélix',
      description: "Figurine d'Obélix portant un menhir sur son dos ",
      material: 'Résine',
      height: 20,
    },
    {
      id: 3,
      name: 'Panoramix',
      price: 54.99,
      imageUrl: '../../assets/images/Panoramix.jpg',
      alt: 'Figurine représentant Panoramix',
      description:
        'Figurine de Panoramix marchant avec sa louche pour servir sa potion magique',
      material: 'Résine',
      height: 18,
    },
    {
      id: 4,
      name: 'Idéfix',
      price: 39.99,
      imageUrl: '../../assets/images/Idefix.jpg',
      alt: 'Figurine représentant Idéfix',
      description: "Figurine d'Idéfix assis, le petit chien blanc d'Obélix",
      material: 'Résine',
      height: 10,
    },
    {
      id: 5,
      name: 'Assurancetourix',
      price: 61.99,
      imageUrl: '../../assets/images/Assurancetourix.jpg',
      alt: 'Figurine représentant Assurancetourix',
      description: "Figurine d'Assurancetourix tenant sa lyre",
      material: 'Résine',
      height: 17,
    },
    {
      id: 6,
      name: 'Abraracourcix',
      price: 79.99,
      imageUrl: '../../assets/images/Abraracourcix.jpg',
      alt: 'Figurine représentant Abraracourcix',
      description:
        "Figurine d'Abraracourcix avec son casque ailé debout sur son bouclier",
      material: 'Résine',
      height: 22,
    },
    {
      id: 7,
      name: 'Falbala et Idéfix',
      price: 69.99,
      imageUrl: '../../assets/images/Falbala.jpg',
      alt: 'Figurine représentant Falbala',
      description: 'Figurine de Falbala portant Idefix dans ses bras',
      material: 'Résine',
      height: 16,
    },
    {
      id: 8,
      name: 'Jules César',
      price: 89.99,
      imageUrl: '../../assets/images/Jules-César.jpg',
      alt: 'Figurine représentant Agecanonix',
      description:
        'Figurine de Jules César avec sa couronne de laurier disant sa célèbre phrase Veni, Vidi, Vici',
      material: 'Résine',
      height: 25,
    },
    {
      id: 9,
      name: 'Soldat Romain',
      price: 49.99,
      imageUrl: '../../assets/images/Soldat-romain.jpg',
      alt: 'Figurine représentant un soldat de la légion romaine',
      description: "Figurine d'un soldat romain avec son casque et sa lance",
      material: 'Résine',
      height: 18,
    },
  ];

  getFigurineById(id: number): Figurine | undefined {
    return this.figurines.find((figurine) => figurine.id === id);
  }

  constructor() {}
}
