import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthGaurd } from 'src/app/shared/services/auth.gaurd';
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    signinForm: FormGroup;
    returnUrl: string;
    error: string;
    submitted=false;
    errorMessage = 'Invalid Credentials';
    invalidLogin = false;
    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private route: ActivatedRoute,
        private authGard:AuthGaurd
    ) {
        if (this.auth.isUserLoggedIn()) {
            this.router.navigate(['/admin']);
        }
     }
    ngOnInit() {
       
        this.signinForm = this.formBuilder.group({
            clientCode:['',Validators.required],
            email: ['mdrkuchhadiya@gmail.com', Validators.required],
            password: ['Admin@123', Validators.required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
    }
    get f() { return this.signinForm.controls; }
    onSubmit() {
        this.submitted = true;
        this.loading = true;
        if (this.signinForm.invalid) {
            this.loading = false;
            return;
        }
        this.loadingText = 'Sigining in...';
        this.auth.login(this.f.clientCode.value,this.f.email.value, this.f.password.value).pipe(first()).subscribe(data => {
            this.router.navigateByUrl(this.returnUrl)
            this.invalidLogin = false
            if(!this.authGard.unauthrized===true){
                this.submitted = false;
                this.loading = false;
                this.invalidLogin = true;
                this.errorMessage="Access Denied";
                this.errorMessage="";
                
            }

        }, error => {
            this.error = error;
            this.loading = false;
            this.invalidLogin = true;
        })
    }
}
