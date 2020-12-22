import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country: any;
  myCountry: any = [];
  name: string= '';
  constructor(private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const name = this.route.snapshot.params['name'];
    this.name = name;

    this.route.params.subscribe(
      (params: Params) => {
        this.name = params['name'];
      }
    )
    
    this.countryService.getCountryByName(this.name).subscribe( data => {
      this.country = data;
      this.myCountry = this.country[0];
    });

    
    // this.country = this.countryService.getCountryByName('name');
    
  }

}
