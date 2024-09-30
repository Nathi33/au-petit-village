import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
  // transform() est la méthode utilisée pour transformer une entrée avant de la restituer dans le template,
  // figurines: any[] est le premier argument qui représente un tableau d'objets (ici, les figurines),
  // ascending: boolean = true est un second argument optionnel qui indique l'ordre de tri (si true, le tri se fait en ordre croissant (par défaut), si false, le tri sera décroissant)
  transform(figurines: any[], isAscending: boolean | null): any[] {
    // Si le tableau figurines est vide ou si l'ordre de tri n'est pas défini, on retourne le tableau
    if (!figurines || isAscending === null) {
      return figurines;
    }

    // On utilise la méthode slice() pour créer une copie du tableau de figurines
    // et éviter de modifier le tableau original
    return figurines.slice().sort((a, b) => {
      // Si l'ordre de tri est croissant, on compare a et b et on renvoie un nombre négatif si a doit être avant b,
      // un nombre positif si b doit être avant a et 0 si les deux sont égaux
      if (isAscending) {
        return a.price - b.price;
      } else {
        // Si l'ordre de tri est décroissant, on compare b et a et on renvoie un nombre négatif si b doit être avant a,
        // un nombre positif si a doit être avant b et 0 si les deux sont égaux
        return b.price - a.price;
      }
    });
  }
}
