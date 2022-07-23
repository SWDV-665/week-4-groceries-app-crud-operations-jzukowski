import { Injectable } from '@angular/core';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { AlertController, ModalController } from 'ionic-angular';
import {ModalGroceryItemPage} from '../../pages/modal-grocery-item/modal-grocery-item';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public dataService: GroceriesServiceProvider, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  showPrompt(item?, index?) {
    /*
    const prompt = this.alertCtrl.create({
      title: item ? "Edit Item" : "Add Item",
      message: item ? "Please edit item..." : "Please enter item...",
      inputs: [
        {
          name: "name",
          value: item ? item.name : null
        },
        {
          name: "quantity",
          value: item ? item.quantity : null
        },
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("cancelled");
          }
        },
        {
          text: "Save",
          handler: data => {
            if (index !== undefined){
              this.dataService.editItem(data, index)
            }
            else {
              this.dataService.addItem(data);
            }
            console.log("saved");
          }
        }
      ],
    });
    prompt.present();
    */

    let modal = this.modalCtrl.create(ModalGroceryItemPage, {item: item}, {cssClass : 'select-modal'});
    modal.onDidDismiss(data => {
      if (data !== undefined) {
        if (index === undefined)
          this.dataService.addItem(data);
        else {
          this.dataService.editItem(data, index);
        }
      }
    });
    modal.present();
  }

}
