import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
declare global {
  var  google: any; // Puedes ajustar esto según las necesidades específicas de tu aplicación

}
@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  private loader: Loader;

  constructor() {
    this.loader = new Loader({
      apiKey: 'AIzaSyA-M_zOnptIIzEQ2PosWVlPRbBQ44zr-YM',  // Reemplaza con tu clave de API
      version: 'weekly',
      libraries: ['places'],  // Agrega las bibliotecas que necesites
    });
  }

  async initMap(lat: number, lng: number): Promise<void> {
    await this.loader.load();
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 15,
        center: { lat, lng },
      }
    );

    new google.maps.Marker({
      position: { lat, lng },
      map,
      title: 'Hello World!',
    });
  }
}
