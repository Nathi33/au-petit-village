import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PresentationService {
  presentations = [
    {
      imgURL1: '../assets/images/Village.jpg',
      alt1: 'Image représentant la France avec un zoom sur le dernier villageois gaulois dans Astérix et Obélix',
      imgURL2: '../assets/images/Village-2.jpg',
      alt2: 'Image représentant un village gaulois dans Astérix et Obélix',
      paragraph:
        '<strong>Au petit village</strong> est une entreprise qui confectionne des figurines inspirées de la bande dessinée Astérix et Obélix.</br>Les figurines sont en résine et peintes à la main.</br>Elles sont fabriquées en France.',
      text: "Nous sommes en 2024. Toute la collection de figurines est envahie par des modèles standardisés... Toute ? Non ! Une boutique peuplée de passionnés résiste encore et toujours à la banalité.</br> Dans cet atelier artisanal, de magnifiques figurines des célèbres Gaulois Astérix, Obélix, et leurs amis prennent vie avec soin et précision.</br> Les détails minutieux et la créativité débordante font de chaque pièce un trésor unique pour les collectionneurs et amateurs de l'univers d'Astérix.",
    },
  ];

  constructor() {}
}
