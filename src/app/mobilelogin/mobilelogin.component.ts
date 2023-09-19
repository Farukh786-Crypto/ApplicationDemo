import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
    selector:'app-mobile-login',
    templateUrl:'./mobilelogin.component.html',
    styleUrls:['./mobilelogin.component.css']
})

export class MobileLoginComponent implements OnInit{

    MobileLoginForm:FormGroup;

    constructor(private formBuilder:FormBuilder){

    }

    ngOnInit(): void {
        this.MobileLoginForm=this.formBuilder.group({
            mobileNumber:['',[Validators.required]]
        })
    }
    
    MobileVerify()
    {
        console.log(this.MobileLoginForm.value);
    }

}







