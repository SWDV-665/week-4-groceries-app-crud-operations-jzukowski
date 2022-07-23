import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalGroceryItemPage } from './modal-grocery-item';

@NgModule({
  declarations: [
    ModalGroceryItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalGroceryItemPage),
  ],
})
export class ModalGroceryItemPageModule {}
