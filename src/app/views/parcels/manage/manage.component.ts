import { Component, OnInit, ViewChild} from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from 'src/app/shared/services/location/city.service';
import { StateService } from 'src/app/shared/services/location/state.service';
import { CountryService } from 'src/app/shared/services/location/country.service';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ParcelService } from 'src/app/shared/services/parcel.service';
import { ToastrService } from 'ngx-toastr';
import { MatStepper } from '@angular/material';

export interface Food {
  value: string;
  display: string;
}
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class ManageComponent implements OnInit {
  @ViewChild('matHorizontalStepper',{static:false}) stepper: MatStepper;
  isThisStepDone: boolean = false;
  isLinear = false;
  isCompleted: boolean;
  addCustomerForm: FormGroup;
  addReceiverForm: FormGroup;
  addParcelForm: FormGroup;
  submitted = false;
  stepIndex:any;
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
      name: ['', Validators.required],
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
      weight: ['', Validators.required],
      amount: ['', Validators.required],
      charge: ['', Validators.required],
      otherCharge: ['', Validators.required],
      remark: ['', Validators.required],
    });
    this.parcelPatchValue();
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
    this.addCustomerForm.reset();
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

  public onStepChange(event: any): void {
    console.log(event.selectedIndex);
    this.stepIndex=event.selectedIndex;
  }
  senderForm(stepper: MatStepper) {
    this.isThisStepDone = true;
    this.submitted = true;
    if (this.addCustomerForm.invalid) {
      return;
    }
    this._customerService.addCustomer("sender",
      this.addCustomerForm.value).subscribe((data) => {
        this._customerService.subject.next(data);
        localStorage.setItem('sender', JSON.stringify(data))
        this.submitted = false;
        stepper.next();
        this.isThisStepDone = false;
        this.toastr.success('Sender Add successfully!', 'Success', { timeOut: 3000, closeButton: true, progressBar: true });
     
      }, error => {
        this.toastr.error('Somthing went wrong!', 'Error', { timeOut: 3000, closeButton: true, progressBar: true });
      });
  }
  applyFilter(no) {
    this._customerService.getCustomersBasedPhoneNo(no).subscribe(res => {
      console.log(res);
      console.log(res.id);
      console.log(res.name);
      this.addCustomerForm.patchValue({
        name: res.name,
        country: res.countryId,
        state: res.stateId,
        city: res.cityId,
        address: res.address,
        email: res.email,
        phoneNo: res.phoneNo,
      });
    });
  }
  receiverForm(stepper: MatStepper) {
    this.isThisStepDone = true;
    this.submitted = true;
    if (this.addReceiverForm.invalid) {
      return;
    }
    this._customerService.addCustomer("receiver",
      this.addReceiverForm.value).subscribe((data) => {
        this.submitted = false;
        stepper.next();
        this.isThisStepDone = false;
        localStorage.setItem('receiver', JSON.stringify(data))
        this.toastr.success('Receiver Add successfully!', 'Success', { timeOut: 3000, closeButton: true, progressBar: true });
      }, error => {
       
        this.toastr.error('Somthing went wrong!', 'Error', { timeOut: 3000, closeButton: true, progressBar: true });
      });
  }

  parcelFrom(stepper: MatStepper) {
    this.isThisStepDone = true;
    this.submitted = true;
    if (this.addParcelForm.invalid) {
      return;
    }
    this._parcelService.addParcel(this.addParcelForm.value).subscribe((success: any) => {
      this.submitted = false;
      localStorage.removeItem("sender");
      localStorage.removeItem("receiver");
      stepper.next();
      this.isThisStepDone = false;
      this.toastr.success('Parcel Add successfully!', 'Success', { timeOut: 3000, closeButton: true, progressBar: true });
    }, error => {
      this.toastr.error('Somthing went wrong!', 'Error', { timeOut: 3000, closeButton: true, progressBar: true });
    });
  }
  parcelPatchValue(){
    const sender = JSON.parse(localStorage.getItem("sender"));
    const receiver = JSON.parse(localStorage.getItem("receiver"));
    console.log(receiver);
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