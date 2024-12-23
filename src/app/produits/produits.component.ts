import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css',
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits()

    //this.produits = this.produitService.listeProduits()
  }

  supprimerProduit(prod: Produit) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.produitService.supprimerProduit(prod).subscribe((data) => {
      console.log("-----Voici le produit supprimer", data)
      this.chargerProduits()

    });
  }

  chargerProduits() {
    this.produitService.listeProduits().subscribe((prods) => {
      console.log(prods);
      this.produits = prods;
    });
  }
}
