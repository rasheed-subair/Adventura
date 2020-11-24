import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

    apiPath: string = 'https://restcountries.eu/rest/v2/';
  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get(this.apiPath + 'all');
  }

  getAllCountriesByContinent(continent: string) {
    return this.http.get(this.apiPath + 'region/' +  continent);
  }

  getCountryByName(country: string) {
    return this.http.get(this.apiPath + 'name/' + country);
  }
}
