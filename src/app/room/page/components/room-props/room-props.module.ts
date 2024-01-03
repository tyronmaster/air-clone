import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomPropsComponent } from './room-props.component';
import { NumeralSharedModule } from 'src/app/core/numerals/shared';



@NgModule({
  imports: [CommonModule, NumeralSharedModule],
  declarations: [RoomPropsComponent],
  exports: [RoomPropsComponent],
})
export class RoomPropsModule {}
