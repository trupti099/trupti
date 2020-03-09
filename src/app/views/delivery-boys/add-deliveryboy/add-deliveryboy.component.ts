import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { CountryService } from '../../../../app/shared/services/location/country.service';
import { CityService } from 'src/app/shared/services/location/city.service';
import { StateService } from 'src/app/shared/services/location/state.service';
import { LiveUpdateService } from 'src/app/shared/services/live-update.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DeliveryboyService } from 'src/app/shared/services/deliveryboy.service';

@Component({
  selector: 'app-add-deliveryboy',
  templateUrl: './add-deliveryboy.component.html',
  styleUrls: ['./add-deliveryboy.component.scss']
})

export class AddDeliveryboyComponent implements OnInit {
  addDeliveryBoy:FormGroup;
  imageErrorMsg: string;
  imageURL:string;
  
  selectedFile:File=null;
  submitted = false;
  cities: {};
  states: {};
  countries: {};
  file: string;
  myfiles:string[]=[];
  user_id: any;
  imageName: any;
  event: any;
  files: any;
  imagefile: string;
 // @ViewChild( string, 'fileInput:string') fileInput: ElementRef;
  constructor(private formBuilder: FormBuilder,
              private _countryService: CountryService,
              private _stateService: StateService,
              private _cityService: CityService,
              private _liveUpdate:LiveUpdateService,
              private router:Router,
              private _deliveryboyservice:DeliveryboyService,
              private http:HttpClient) { }

  ngOnInit() {

    // this.addDeliveryBoy=new FormGroup({
    //     firstname: new FormControl('',[Validators.required]),
    //     laststname: new FormControl('',[Validators.required]),
    //     email: new FormControl('',[Validators.required]),
    //     country: new FormControl('',[Validators.required]),
    //     state: new FormControl('',[Validators.required]),
    //     city: new FormControl('',[Validators.required]),
    //     contact: new FormControl('',[Validators.required]),
    //     address: new FormControl('',[Validators.required]),
    //     role: new FormControl('',[Validators.required]),
    //     datePicker: new FormControl('',[Validators.required]),
    //     profile: new FormControl('',[Validators.required]),
    //    profilesource: new FormControl('',[Validators.required])
    // });
     // this.filesUpdated(this.profile);  
      this.addDeliveryBoy = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      country:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      contact: ['', Validators.required],
      address:['',Validators.required],
      role: ['', Validators.required],
      datePicker: ['', Validators.required],
     // profile:[''],
    });

    this.getCountries();
    //console.log(this.addDeliveryBoy);
  }
  //onFileSelected(event)
   //{
    // if(event.target.files.length>0)
    // {
    //   const profile=event.target.files[0];
    //   this.addDeliveryBoy.patchvalue({
    //     profilesource:profile
    //   });
    // }
  //   const file=(event.target as HTMLInputElement).files[0];
  //   this.addDeliveryBoy.patchvalue({
  //     profile:file
  //   });
  //   this.addDeliveryBoy.get('profile').updateValueAndValidity();

  //   const reader:FileReader=new FileReader();
  //   reader.onload = () =>{
  //     this.imageURL=reader.result as string;
  //     console.log(this.imageURL);
  //  }
  //  reader.readAsDataURL(file)

    // this.file=event.target.files[0];
    // this.myfiles.push(event.target.files[0]);
    // this.addDeliveryBoy.get('profile').setValue(this.myfiles);  
    //console.log(this.myfiles);

    // let reader = new FileReader();
    // if(event.target.files && event.target.files.length > 0) {
    //   let file = event.target.files[0];
    //   reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     this.addDeliveryBoy.get('profile').setValue({
    //       filename: file.name,
    //      //filetype: file.type,
    //       //value: reader.result as string
    //     })
    //   };
    // }
    
    // this.files=files.target;
    // this.imageName=files.target.files[0].name;
    // this.readThis(event.target);

 // }
  // readThis(inputValue:any):void{
  //   var file:File=inputValue.files[0];
  //   var myReader:FileReader=new FileReader();
  //     myReader.onloadend=(e)=>{
  //       this.imagefile=myReader.result;
  //       console.log(this.imagefile);
  //     }
  //     myReader.readAsDataURL(file);
  //   }

  get form() {
    return this.addDeliveryBoy.controls;
  }

  onSubmit() {
    
    // const formModel=this.addDeliveryBoy.value;
    // console.log(formModel);
    // this.addDeliveryBoy.get('profile').setValue({ });
    //this.addDeliveryBoy.controls['profile'].setValue(this.file);
    this.submitted = true;
    if (this.addDeliveryBoy.invalid) {
      return;
    }
    this._deliveryboyservice.addDeliveryBoy(this.addDeliveryBoy.value).subscribe(data => {
      console.log(JSON.stringify(data));
     // this.submitted = false;
      alert("Data inserted Successfully")
      this.onReset();
      this.router.navigateByUrl('/admin/delivery-boys');
      this._liveUpdate.setUpdate("save");
    });
    console.log("success" + JSON.stringify(this.addDeliveryBoy.value));
    
  }

  onReset() {
    this.submitted = false;
    this.addDeliveryBoy.reset();
  }
 

  // filesUpdated(files) {
   
  //   console.log("Store state updated! Current state: ", files)
  // }

  // fileUploaded(success, response, file) {
  //   success && console.log("uploaded - awesome", response, file);
  //   success || console.log("not uploaded - very bad", response, file);
  // }

  // filename;

  // beforeAddFile(file) {
  //   if (file) {
  //     this.filename =file.name
  //     var ext = this.filename.substring(this.filename.lastIndexOf('.') + 1).toLowerCase();
  //     if (ext == "jpeg" || ext == "png" || ext == "jpg" ) {
  //       if (file.size > 1024 * 1024) {
  //         this.imageErrorMsg = "image shoud be less then 1 mb";
  //         alert(this.imageErrorMsg);
  //         console.log("imageErrorMsg", this.imageErrorMsg)
  //         return false;
  //       } 
  //       return true;
  //     }
  //     else {
  //       this.imageErrorMsg = "Upload jpeg, png and jpg Images only";
  //       alert("Upload jpeg, png and jpg Images only");
  //       return false;
  //     }
  //   }
  // }
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
