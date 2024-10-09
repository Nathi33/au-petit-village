import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../presentation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  presentations: any[] = [];
  constructor(private presentationService: PresentationService) {}

  ngOnInit(): void {
    this.presentations = this.presentationService.presentations;
  }
}
