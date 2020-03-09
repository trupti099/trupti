import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { CountryService } from 'src/app/shared/services/location/country.service';
import { StateService } from 'src/app/shared/services/location/state.service';
import { CityService } from 'src/app/shared/services/location/city.service';
import { Role } from 'src/app/shared/models/role.model';
import { Live } from '@ng-bootstrap/ng-bootstrap/util/accessibility/live';
import { LiveUpdateService } from 'src/app/shared/services/live-update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pos',
  templateUrl: './add-pos.component.html',
  styleUrls: ['./add-pos.component.scss']
})
export class AddPosComponent implements OnInit {
  posForm:FormGroup;
  submitted=false;
  cities: {};
  states: {};
  countries: {};
  constructor(private formBuilder:FormBuilder,
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
    this.posForm=this.formBuilder.group({
      name:['',Validators.required],
      // psp:['',Validators.required],
      region: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern(this.phoneNumber)]],
      websiteURL: ['', [Validators.required, Validators.pattern(this.WebURL)]],
      credit: ['', [Validators.required, Validators.min(500), Validators.max(50000), Validators.pattern(this.creditAmount)]]
    })
    
  }
  get f(){
    return this.posForm.controls;
  }
  userType = Role.pos   
  onSubmit(){
    this.submitted=true;
    if(this.posForm.invalid){
      console.log("False")
      alert("Sucess" + JSON.stringify(this.posForm.value, null));
      return;
    }
    this._userService.addUser(
      this.userType,this.posForm.value).subscribe((data) => {
      this.submitted = false;
      alert("Data inserted Successfully")
      this.onReset();
      this.router.navigateByUrl('/admin/pos');
      this._liveUpdate.setUpdate("save");
    });
  }
  onReset(){
    this.submitted=false;
    this.posForm.reset();
  }
  onChangeCountry(id: number) {
    if (id) {
      this._stateService.getStateData(id).subscribe(data => {
        this.states = data
        this.cities = null
      })
    }
  }
  onChangeState(id: number) {
    if (id) {
      this._cityService.getCityData(id).subscribe(data => {
        this.cities = data
      })
    }
  }
  getCountries() { this._countryService.getCountryData().subscribe(data => {
     this.countries = data 
     
    })
}

}
