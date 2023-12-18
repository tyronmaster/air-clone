import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LayoutComponent, MainComponent],
  imports: [RouterModule, HeaderModule, FooterModule, CommonModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
