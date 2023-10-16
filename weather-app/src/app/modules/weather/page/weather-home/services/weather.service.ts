import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '4077288764690f95f19af89f005cbea8';

  constructor(private angular_http: HttpClient) {}

  getWeatherDatas(cityName: string): Observable<any> {
    return this.angular_http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
    );
  }
}
