import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource } from '@angular/material';
import { User } from 'src/app/shared/models/user.model';
import { LiveUpdateService } from 'src/app/shared/services/live-update.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/shared/services/location/city.service';
import { StateService } from 'src/app/shared/services/location/state.service';
import { CountryService } from 'src/app/shared/services/location/country.service';
import { UserService } from 'src/app/shared/services/user.service';
import { City } from 'src/app/shared/models/location/city';
import { State } from 'src/app/shared/models/location/state';
import { Country } from 'src/app/shared/models/location/country';

@Component({
  selector: 'app-edit-psp',
  templateUrl: './edit-psp.component.html',
  styleUrls: ['./edit-psp.component.scss']
})

export class EditPspComponent implements OnInit 
{
  @Input() 
  id: any;
  user:any;
  getData: User;
  
  submitted = false;
  regions: {};
  cities: City[]=[];
  states: State[]=[];
  countries: Country[]=[];
  
 
  pspEditForm: FormGroup;
  paginator: any;
  sort: any;
  isLoading: boolean;

  constructor(private formBuilder: FormBuilder, 
              private modalService: NgbModal,
              private activeRoute: ActivatedRoute,
              private _userService:UserService,
              private _countryService: CountryService,
              private _stateService: StateService,
              private _cityService: CityService,
              private router:Router,
              private _liveUpdateService:LiveUpdateService) {
               // this.pspEditForm.controls['country'].setValue(this.countries);
   }
  phoneNumber = "[0-9]{10}";
  WebURL = "^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
  creditAmount = "[0-9]*";
  ngOnInit() {
  
    this.pspEditForm=new FormGroup({
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
    this.getCountries();
    
    this.id=this.activeRoute.snapshot.paramMap.get("id");
    console.log(this.id);
   this._userService.getUserByID(this.id).subscribe((user) => {
      this.getData = user;
     // console.log(this.getData)
     this.pspEditForm.controls['name'].setValue(user.name);
     this.pspEditForm.controls['region'].setValue(user.region);
      this.pspEditForm.controls['country'].setValue(user.country_id);
     this.pspEditForm.controls['state'].setValue(user.state_id);
     this.pspEditForm.controls['city'].setValue(user.city_id);
     this.onChangeCountry(user.country_id);
     this.onChangeState(user.state_id)
     this.pspEditForm.controls['address'].setValue(user.address);
     this.pspEditForm.controls['phoneNo'].setValue(user.phone_no);
     this.pspEditForm.controls['email'].setValue(user.email);
     this.pspEditForm.controls['websiteURL'].setValue(user.website_url);
     this.pspEditForm.controls['credit'].setValue(user.credit);
     
     /* this.pspEditForm.patchValue({ 
        name: user.name,
        region: user.region,
        country: user.country_id,
        //state: "user.state_id",
        city: user.city_id,
        address: user.address,
        phoneNo: user.phone_no,
        email:user.email,
        websiteURL: user.website_url,
        credit: user.credit})
    }) */
    
    //this.getCountries();
      
  
    // this.pspEditForm=this.formBuilder.group({

    //   name:['',Validators.required],
    //   region: ['', Validators.required],
    //   country: ['', Validators.required],
    //   state: ['', Validators.required],
    //   city: ['', Validators.required],
    //   address: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   phoneNo: ['', [Validators.required, Validators.pattern(this.phoneNumber)]],
    //   websiteURL: ['', [Validators.required, Validators.pattern(this.WebURL)]],
    //   credit: ['', [Validators.required, Validators.min(500), Validators.max(50000), Validators.pattern(this.creditAmount)]]
    // })
     // this.pspEditForm.controls['state'].setValue('ABC');
    })
  }

  get f(){
    return this.pspEditForm.controls;
  }
  getCountries() { this._countryService.getCountryData().subscribe(data => { this.countries = data }) }
  
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
    }
  }
  onSubmit(){
   
    //console.log("Save")
    //this.submitted=true;
    if (this.pspEditForm.invalid) {
      return;
    }
    console.log("user",this.pspEditForm.value)
    this._userService.userUpdate(
      this.id,this.pspEditForm.value
    ).subscribe((success: any) => {
        this.submitted = false;
        console.log(success)
        alert("Data Update Successfully")
        this.onReset();
       this.router.navigateByUrl('/admin/psp');
      this._liveUpdateService.setUpdate("save");
      },error=>{console.log(error)});
    //alert("success" + JSON.stringify(this.pspEditForm.value, null));
  }

  
onReset(){
  this.submitted=false;
  this.pspEditForm.reset();
}

}

 
