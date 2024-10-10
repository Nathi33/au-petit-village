import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  formulaire: FormGroup;
  messageEnvoye: boolean = false;
  // Permet de suivre l'état de soumission du formulaire
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    // Création du formulaire
    this.formulaire = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    //Marque le formulaire comme soumis
    this.submitted = true;

    if (this.formulaire.valid) {
      // Affichage du message de confirmation
      this.messageEnvoye = true;

      // Réinitialisation du formulaire
      setTimeout(() => {
        this.formulaire.reset();
        this.submitted = false;
        this.messageEnvoye = false;
      }, 3000);
    }
  }

  // Méthode pour faciliter l'affichage des erreurs
  get f() {
    return this.formulaire.controls;
  }
}
