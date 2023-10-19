import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Weather } from 'src/app/models/interfaces/weather.interface';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  // styleUrls: ['']
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject<void>();
  initialCityName = 'São Paulo';
  weatherData!: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName).subscribe({
      next: (response) => {
        response && (this.weatherData = response);
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
