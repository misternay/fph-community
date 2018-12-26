import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var L: any;

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  lat: any;
  lng: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
    this.lat = this.navParams.get('lat');
    this.lng = this.navParams.get('lng')
    this.displayMap(this.lat, this.lng)
  }

  displayMap(lat, lng) {
    var map = L.map('mapid').setView([lat, lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
      .bindPopup('อยู่ตรงนี้นะ')
      .openPopup();
  }
}
