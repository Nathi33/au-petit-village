import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      imageSrc: '../../assets/images/facebook.png',
      altText: 'Logo de Facebook',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
      imageSrc: '../../assets/images/instagram.png',
      altText: 'Logo de Instagram',
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com',
      imageSrc: '../../assets/images/twitter.png',
      altText: 'Logo de Twitter',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com',
      imageSrc: '../../assets/images/TikTok.png',
      altText: 'Logo de TikTok',
    },
  ];
}
