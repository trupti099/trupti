import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from 'src/app/shared/services/location/city.service';
import { StateService } from 'src/app/shared/services/location/state.service';
import { CountryService } from 'src/app/shared/services/location/country.service';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ParcelService } from 'src/app/shared/services/parcel.service';
import { ToastrService } from 'ngx-toastr';
import { MatStepper } from '@angular/material';
import { count } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-manage-parcel',
  templateUrl: './manage-parcel.component.html',
  styleUrls: ['./manage-parcel.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class ManageParcelComponent implements OnInit, AfterViewInit {
  @ViewChild('matHorizontalStepper', { static: false }) stepper: MatStepper;
  senderStepDone: boolean = false;
  receiverStepDone: boolean = false;
  parcelStepDone: boolean = false;
  finalStep: boolean = false;
  isCompleted: boolean;
  addCustomerForm: FormGroup;
  addReceiverForm: FormGroup;
  addParcelForm: FormGroup;
  submitted = false;
  stepIndex: any;
  cities: {};
  states: {};
  countries: {};
  constructor(private formBuilder: FormBuilder,
    private _customerService: CustomerService,
    private _countryService: CountryService,
    private _stateService: StateService,
    private _cityService: CityService,
    private _parcelService: ParcelService,
    private toastr: ToastrService
  ) {

  }
  phoneNumber = "[0-9]{10}";
  ngOnInit() {
    this.getCountries();
    this.submitted = false;
    this.addCustomerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern(this.phoneNumber)]],
    });
    this.addReceiverForm = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern(this.phoneNumber)]],
    });
    this.addParcelForm = this.formBuilder.group({
      senderId: ['', Validators.required],
      senderName: ['', Validators.required],
      senderPhoneNo: ['', [Validators.required, Validators.pattern(this.phoneNumber)]],
      receiverId: ['', Validators.required],
      receiverName: ['', Validators.required],
      receiverPhoneNo: ['', [Validators.required, Validators.pattern(this.phoneNumber)]],
      center: ['', Validators.required],
      packageType: ['', Validators.required],
      barCodeNo: ['', Validators.required],
      weight: ['', [Validators.required, Validators.pattern("[0-9]{1,3}")]],
      amount: ['', [Validators.required, Validators.pattern("[0-9]{1,5}")]],
      charge: ['', [Validators.required, Validators.pattern("[0-9]{1,5}")]],
      otherCharge: ['', [Validators.required, Validators.pattern("[0-9]{1,5}")]],
      remark: [''],
    });
    this.parcelPatchValue();
  }
  ngAfterViewInit() {

  }
  get fc() {
    return this.addCustomerForm.controls;
  }
  get fr() {
    return this.addReceiverForm.controls;
  }
  get f() {
    return this.addParcelForm.controls;
  }
  onReset() {

    this.submitted = false;

    if (this.senderStepDone) {
      this.addCustomerForm.reset();
      // this.submitted=false;
    } else if (this.receiverStepDone) {
      this.addReceiverForm.reset();
    }
    else {
      this.addParcelForm.reset();
    }
    // this.addReceiverForm.reset();
  }


  onChangeCountry(id: number) {
    if (id) {
      this._stateService.getStateData(id).subscribe((data: any) => {

        this.states = data
        // const obj = data[id];

        // console.log(obj)
        // if (!obj) return;
        // if (obj.id == data.id) {
        //   this.states = ["1.1", "1.2", "1.3"];
        // }

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
  getCountries() {
    this._countryService.getCountryData().subscribe(data => {
      this.countries = data;
    })
  }

  public onStepChange(event: any): void {
    console.log(event.selectedIndex);
    this.stepIndex = event.selectedIndex;
  }
  senderForm(stepper: MatStepper) {

    this.submitted = true;
    if (this.addCustomerForm.invalid) {
      return;
    }
    this._customerService.addCustomer("sender",
      this.addCustomerForm.value).subscribe((data) => {
        this.senderStepDone = true;
        localStorage.setItem('sender', JSON.stringify(data))
        this.submitted = false;
        stepper.next();
        this.toastr.success('Sender Add successfully!', 'Success', { timeOut: 3000, closeButton: true, progressBar: true });

      }, error => {
        this.toastr.error('Somthing went wrong!', 'Error', { timeOut: 3000, closeButton: true, progressBar: true });
      });
  }
  applyFilter(searchField) {

    this._customerService.getCustomersBasedPhoneNo(searchField).subscribe((res: any) => {
      
      $('#txt-search').keyup(function () {
        var searchField = $(this).val();
        
        // this.submitted = false;
        
        if (searchField === '') {
          $('#filter-records').html('');
          console.log("error")
          return;
        }

        var regex = new RegExp(searchField, "i");
        var output = '';
        var count = 1;
        $.each(res, function (key, val) {
          if ((val.phone_no.toString().search(regex) != -1)) {
            output += '<li class="search-list" id="customerValue'+count+'" value="' + val.id + '">' + val.phone_no + '</li>';
            if (count % 2 == 0) {
              output += ''
            }
            count++;
          }
        });
        $('#filter-records').html(output);
      });
      function patchValueForm() {
        console.log("hii");
      }
      // $("#customerValue1").click(function (patchValueForm) {
      //   var valueOfPhoneNo = $(this).val();
      //   console.log(valueOfPhoneNo);
      // });

      // this.addCustomerForm.patchValue({
      //   name: res.name,
      //   country: res.country_id,
      //   state: res.state_id,
      //   city: res.city_id,
      //   address: res.address,
      //   email: res.email,
      //   phoneNo: res.phone_no,
      // });
    });

  }

  receiverForm(stepper: MatStepper) {
    this.submitted = true;
    if (this.addReceiverForm.invalid) {
      return;
    } 
    
    this._customerService.addCustomer("receiver",
      this.addReceiverForm.value).subscribe((data) => {
        this.receiverStepDone = true;
        stepper.next();
        this.submitted = false;
        localStorage.setItem('receiver', JSON.stringify(data))
        this.toastr.success('Receiver Add successfully!', 'Success', { timeOut: 3000, closeButton: true, progressBar: true });
      }, error => {
        this.toastr.error('Somthing went wrong!', 'Error', { timeOut: 3000, closeButton: true, progressBar: true });
      });
  }

  parcelFrom(stepper: MatStepper) {
    this.submitted = true;
    if (this.addParcelForm.invalid) {
      return;
    }
    console.log(this.addParcelForm.invalid)
    this._parcelService.addParcel(this.addParcelForm.value).subscribe((success: any) => {
      this.parcelStepDone = true;
      this.submitted = false;
      this.submitted = false;
      localStorage.removeItem("sender");
      localStorage.removeItem("receiver");
      stepper.next();
      this.toastr.success('Parcel Add successfully!', 'Success', { timeOut: 3000, closeButton: true, progressBar: true });
    }, error => {
      this.toastr.error('Somthing went wrong!', 'Error', { timeOut: 3000, closeButton: true, progressBar: true });
    });
  }
  parcelPatchValue() {
    const sender = JSON.parse(localStorage.getItem("sender"));
    const receiver = JSON.parse(localStorage.getItem("receiver"));

    if (sender != null && receiver != null) {
      this.addParcelForm.patchValue({
        senderId: sender.success.id,
        senderName: sender.success.name,
        senderPhoneNo: sender.success.phone_no,
        receiverId: receiver.success.id,
        receiverName: receiver.success.name,
        receiverPhoneNo: receiver.success.phone_no,
      });
    }
  }
}