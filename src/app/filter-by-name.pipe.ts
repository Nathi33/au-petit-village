import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  // Fonction pour supprimer les accents d'une chaîne
  private removeAccents(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Supprimer les accents
  }

  transform(figurines: any[], searchTerm: string): any[] {
    // Si la liste de figurines ou le terme de recherche est vide, retourner la liste de figurines telle quelle
    if (!figurines || !searchTerm) {
      return figurines;
    }

    // Normaliser et supprimer les accents du searchTerm
    const normalizedSearchTerm = this.removeAccents(searchTerm.toLowerCase());

    return figurines.filter((figurine) => {
      // Normaliser et supprimer les accents du nom de chaque figurine
      const normalizedName = this.removeAccents(figurine.name.toLowerCase());
      // Permet de ne garder que les noms qui commencent par le searchTerm
      return normalizedName.startsWith(normalizedSearchTerm);
    });
  }
}
