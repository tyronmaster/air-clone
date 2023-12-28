import { NgModule } from '@angular/core';
import { RowModule } from './row/row.module';
import { ColumnModule } from './column/column.module';
import { RowComponent } from './row/row.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  imports: [RowModule, ColumnModule],
  exports: [RowComponent, ColumnComponent],
})
export class GridModule {}
