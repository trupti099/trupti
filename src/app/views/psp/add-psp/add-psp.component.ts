import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { CountryService } from 'src/app/shared/services/location/country.service';
import { StateService } from 'src/app/shared/services/location/state.service';
import { CityService } from 'src/app/shared/services/location/city.service';
import { Role } from 'src/app/shared/models/role.model';
import { LiveUpdateService } from 'src/app/shared/services/live-update.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-psp',
  templateUrl: './add-psp.component.html',
  styleUrls: ['./add-psp.component.scss']
})
export class AddPspComponent implements OnInit {
  pspForm: FormGroup;
  submitted = false;
  cities: {};
  states: {};
  countries: {};
  constructor(
    private formBuilder: FormBuilder,
    private _userService: UserService,
    private _countryService: CountryService,
    private _stateService: StateService,
    private _cityService: CityService,
    private _liveUpdate:LiveUpdateService,
    private router:Router
   

  ) {
  }
  phoneNumber = "[0-9]{10}";
  WebURL = "^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
  creditAmount = "[0-9]*";
  ngOnInit() {
    this.getCountries();

    this.pspForm = this.formBuilder.group({
      name: ['', Validators.required],
      region: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern(this.phoneNumber)]],
      websiteURL: ['', [Validators.required, Validators.pattern(this.WebURL)]],
      credit: ['', [Validators.required, Validators.min(500), Validators.max(50000), Validators.pattern(this.creditAmount)]]
    },
    );
  }
  get f() {
    return this.pspForm.controls;
  }
  userType = Role.psp;
  onSubmit() {
    this.submitted = true;
    if (this.pspForm.invalid) {
      return;
    }
    // alert("success" + JSON.stringify(this.pspForm.value, null));
    this._userService.addUser(this.userType, this.pspForm.value).subscribe((data) => {
      this.submitted = false;
      alert("data Suceesfully added");
      this.onReset();
      this.router.navigateByUrl('/admin/psp');
      this._liveUpdate.setUpdate("save");
    
    });
  }
  onReset() {
    this.submitted = false;
    this.pspForm.reset();
  }
  onChangeCountry(id: number) {
    if (id) {
      this._stateService.getStateData(id).subscribe(data => {
        this.states = data
        this.cities = null
      });
    }
    else
    {
      this.states=null;
      this.cities=null;
    }
  }
  onChangeState(id: number) {
    if (id) {
      this._cityService.getCityData(id).subscribe(data => { 
        this.cities = data 
      })

      console.log(this.cities);
    }
  }
  getCountries() { this._countryService.getCountryData().subscribe(data => { 
    this.countries = data 
    console.log('Data',this.countries);
  }) }

}
