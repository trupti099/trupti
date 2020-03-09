import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/shared/services/user.service';
import { CountryService } from 'src/app/shared/services/location/country.service';
import { StateService } from 'src/app/shared/services/location/state.service';
import { CityService } from 'src/app/shared/services/location/city.service';
import { User } from 'src/app/shared/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LiveUpdateService } from 'src/app/shared/services/live-update.service';

@Component({
  selector: 'app-edit-pos',
  templateUrl: './edit-pos.component.html',
  styleUrls: ['./edit-pos.component.scss']
})
export class EditPosComponent implements OnInit {
  @Input() id: any;
  getData: User;
  posEditForm: FormGroup;
  submitted = false;
  cities: {};
  states: {};
  countries: {};
  constructor(private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private _userService: UserService,
    private _countryService: CountryService,
    private _stateService: StateService,
    private _cityService: CityService,
    private activeRoute: ActivatedRoute,
    private route:Router,
    private _liveUpdate:LiveUpdateService
  ) {
  }
  phoneNumber = "[0-9]{10}";
  WebURL = "^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
  creditAmount = "[0-9]*";
  ngOnInit() {

    this.posEditForm=new FormGroup({
      name:new FormControl(),
      region:new FormControl(),
      country:new FormControl(),
      state:new FormControl(),
     city:new FormControl(),
      address:new FormControl(),
      email:new FormControl(),
      phoneNo:new FormControl(),
      websiteURL:new FormControl(),
     credit:new FormControl()
    });
   

    this.id=this.activeRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this._userService.getUserByID(this.id).subscribe((user: any) => {
      this.getData = user;
      console.log(this.getData)
      this.posEditForm.controls['name'].setValue(user.name);
      this.posEditForm.controls['region'].setValue(user.region);
       this.posEditForm.controls['country'].setValue(user.country_id);
      this.posEditForm.controls['state'].setValue(user.state_id);
      this.posEditForm.controls['city'].setValue(user.city_id);
      this.onChangeCountry(user.country_id);
      this.onChangeState(user.state_id)
      this.posEditForm.controls['address'].setValue(user.address);
      this.posEditForm.controls['phoneNo'].setValue(user.phone_no);
      this.posEditForm.controls['email'].setValue(user.email);
      this.posEditForm.controls['websiteURL'].setValue(user.website_url);
      this.posEditForm.controls['credit'].setValue(user.credit);
      // this.posEditForm.setValue({
      //   name: user.name,
      //   region: user.region,
      //   country: user.country_id,
      //   state: user.state_id,
      //   city: user.city_id,
      //   address: user.address,
      //   phoneNo: user.phone_no,
      //   email:user.email,
      //   websiteURL: user.website_url,
      //   credit: user.credit
      // });
    })
    this.getCountries();
    //this.onChangeCountry(country_id:Number)
    // this.posEditForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   // psp: ['', Validators.required],
    //   region: ['', Validators.required],
    //   country: ['', Validators.required],
    //   state: ['1', Validators.required],
    //   city: ['1', Validators.required],
    //   address: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   phoneNo: ['', [Validators.required, Validators.pattern(this.phoneNumber)]],
    //   websiteURL: ['', [Validators.required, Validators.pattern(this.WebURL)]],
    //   credit: ['', [Validators.required, Validators.min(500), Validators.max(50000), Validators.pattern(this.creditAmount)]]
    // })
  }
  get f() {
    return this.posEditForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.posEditForm.invalid) {
      return;
    }
    console.log("user",this.posEditForm.value)
    this._userService.userUpdate(
      this.id,this.posEditForm.value
    ).subscribe((success: any) => {
        this.submitted = false;
        console.log(success);
        alert("Data Update SuccessFully")
        this.onReset();
       this.route.navigateByUrl('/admin/pos');
      this._liveUpdate.setUpdate("save");
        
     
      },error=>{console.log(error)});
  }
  onReset(){
    this.submitted=false;
    this.posEditForm.reset();
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
  getCountries() { this._countryService.getCountryData().subscribe(data => { this.countries = data }) }

}
