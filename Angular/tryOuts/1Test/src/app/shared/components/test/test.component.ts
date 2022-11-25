import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { city } from '../../model/test';
import { country } from '../../model/test';
import { state } from '../../model/test';
import { ApiService } from '../../service/api/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public citiesData: city[];
  public statesData: state[];
  public countriesData: country[];
  public tempStateData?: any;
  public tempCityData?: any;

  public searchText?: string;

  form: FormGroup;

  constructor(
    private apiService: ApiService,
    formBuild: FormBuilder
  ) {
    this.citiesData = [];
    this.statesData = [];
    this.countriesData = [];

    this.form = formBuild.group({
      selectCountry: [''],
      selectState: [''],
      selectCity: ['']
    });

    this.form.controls['selectState'].disable();
    this.form.controls['selectCity'].disable();
  }

  ngOnInit(): void {
    this.getCities(); this.getStates(); this.getCountires();
  }

  private getCities(): void {
    this.apiService.getCities().subscribe((result: city[]) => { this.citiesData = result; });
  }
  private getStates(): void {
    this.apiService.getStates().subscribe((result: state[]) => { this.statesData = result; });
  }
  private getCountires(): void {
    this.apiService.getCountries().subscribe((result: country[]) => { this.countriesData = result; });
  }
  onSelectCountry(event: any) {
    const countryID = event.target.value;
    if (countryID) {
      this.tempStateData = this.statesData.filter(res => countryID == res.country_id);
      this.form.controls['selectState'].enable();
    }
  }
  onSelectState(event: any) {
    const stateID = event.target.value;
    if (stateID) {
      this.tempCityData = this.citiesData.filter(res => stateID == res.state_id);
      this.form.controls['selectCity'].enable();
    }
  }

}
