import { NgModule } from '@angular/core';
import { ErrorApplicationComponent } from './error-application.component';
import { ContainerModule } from 'src/app/ui/container';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule, ContainerModule, MatButtonModule],
  declarations: [ErrorApplicationComponent],
  exports: [ErrorApplicationComponent],
})
export class ErrorApplicationModule {}
