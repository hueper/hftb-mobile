import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { UploadPage } from '../upload/upload';

/*
  Generated class for the Edit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {
  private baseUrl: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public toastCtrl: ToastController) {
    this.baseUrl = 'http://hftb.eu:3334/api';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  removeAllImages() {
    this.http.get(`${this.baseUrl}/images/removeAllImages`)
    .map(response => response.json())
    .subscribe(data => {
      this.presentToast(data.msg);
      this.navCtrl.push(UploadPage);
    }, error => console.log('Could not remove all images.'));
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 6000,
      position: 'top'
    });
    toast.present();
  }

}
