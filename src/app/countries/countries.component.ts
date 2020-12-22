import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountryService } from './country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countriesList: any;
  continent: string = '';
  filterByCountry= '';
  filterByContinent= '';
  constructor(private countryService: CountryService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    //route-snapshot-params is used to get the value attached 
    //to the router link in this case, a variable named 'region'
    const continent = this.route.snapshot.params['region'];
    this.continent = continent;

    //It is advisable to subscribe to the params in case you intend
    // to change the value while on that page
    
    this.route.params.subscribe(
      (params: Params) => {
        this.continent = params['region'];
      }
    )

    if(this.continent == '' || this.continent == 'all'){
      this.countryService.getAllCountries().subscribe(data => {
        this.countriesList = data;
      });
    }
    else if(this.continent == 'Africa' || this.continent == 'Europe' || this.continent == 'Asia' || this.continent == 'Americas'){
      this.countryService.getAllCountriesByContinent(this.continent).subscribe( data => {
        this.countriesList = data;
      })
    }
    else{
      this.router.navigate(['..not-found'], {relativeTo: this.route});
    }
  }

}
