import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export interface IconConfig {
  name: string;
  path: string;
}

const icons: IconConfig[] = [
  {
    name: 'appFacebook',
    path: './assets/icons/facebook.svg',
  },
  {
    name: 'appInstagram',
    path: 'assets/icons/instagram.svg',
  },
  {
    name: 'appTelegram',
    path: 'assets/icons/telegram.svg',
  },
  {
    name: 'appTwitter',
    path: 'assets/icons/twitter.svg',
  },
  {
    name: 'appYoutube',
    path: 'assets/icons/youtube.svg',
  },
];

@NgModule({
  imports: [MatIconModule, HttpClientModule],
  exports: [MatIconModule],
})
export class IconsModule {
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
  ) {
    icons.forEach((icon) => this.add(icon));
  }

  private add(config: IconConfig): void {
    this.matIconRegistry.addSvgIcon(config.name, this.domSanitizer.bypassSecurityTrustResourceUrl(config.path));
  }
}
