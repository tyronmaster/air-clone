import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from 'src/app/ui/icons/icons.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FooterComponent],
  imports: [RouterModule, IconsModule, MatButtonModule],
  exports: [FooterComponent],
})
export class FooterModule {}
