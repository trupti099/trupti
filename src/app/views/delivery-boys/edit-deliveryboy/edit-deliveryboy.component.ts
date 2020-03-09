import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-edit-deliveryboy',
  templateUrl: './edit-deliveryboy.component.html',
  styleUrls: ['./edit-deliveryboy.component.scss']
})
export class EditDeliveryboyComponent implements OnInit {
  editUser: any;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.editUser = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      phoneNo:['',Validators.required],
      image:['',Validators.required],
      role:['',Validators.required],
      datePicker:['',Validators.required],
    });
  }
  get f() {
    return this.editUser.controls;
  }
  onSubmit() {
    console.log("Save")
    this.submitted = true;
    if (this.editUser.invalid) {
      return;
    }
    alert("success" + JSON.stringify(this.editUser.value, null));
  }
  close() {
    this.modalService.dismissAll()
  }
  // filesUpdated(files) {
  //   console.log("Store state updated! Current state: ", files)
  // }
  // fileUploaded(success, response, file) {
  //   success && console.log("uploaded - awesome", response, file);
  //   success || console.log("not uploaded - very bad", response, file);
  // }

  // imageErrorMsg;
  // filename;
  // beforeAddFile(file) {
  //   if (file) {
  //     this.filename = file.name
  //     var ext = this.filename.substring(this.filename.lastIndexOf('.') + 1).toLowerCase();
  //     if (ext == "jpeg" || ext == "png" || ext == "jpg") {
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
}
