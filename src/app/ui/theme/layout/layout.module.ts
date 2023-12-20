import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { MainModule } from './components/main/main.module';

@NgModule({
  imports: [RouterModule, HeaderModule, MainModule, FooterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
