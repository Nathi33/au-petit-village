import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService, Figurine } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  figurine: Figurine | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    // Permet de récuupérer l'ID depuis les paramètres de la route
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Récupère la figurine correspondant à l'ID
    this.figurine = this.productsService.getFigurineById(id);
  }

  // Méthode pour retourner à la liste des figurines
  goBack() {
    this.router.navigate(['/']); // Redirige vers la route de ta liste de figurines
  }
}
