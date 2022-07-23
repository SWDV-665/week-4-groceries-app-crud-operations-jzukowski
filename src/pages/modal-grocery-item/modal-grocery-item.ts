import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalGroceryItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-grocery-item',
  templateUrl: 'modal-grocery-item.html',
})
export class ModalGroceryItemPage {
  item;
  title;
  quantity;
  name;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.item = navParams.get('item');

    if (this.item !== undefined ) {
      this.title = 'Edit Item';
      this.quantity = this.item.quantity;
      this.name = this.item.name;
    }
    else {
      this.title = 'Add Item';
    }
  }

  counter(i: number) {
      return new Array(i);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalGroceryItemPage');
  }

  saveModal() {
    let data = {'name': this.name, 'quantity': this.quantity};
    this.viewCtrl.dismiss(data);  
  }

  dismissModal() {
    this.viewCtrl.dismiss(); 
  }

}
