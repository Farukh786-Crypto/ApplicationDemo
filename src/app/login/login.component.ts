import {Component, OnInit} from '@angular/core'
import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { Alert } from 'selenium-webdriver';
import { ValidationService } from '../shared/Validation.service';

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit{
    loginForm: FormGroup;
    submitted:boolean=false;

    constructor(private formBuilder: FormBuilder,
            private Validations:ValidationService){}
            
    ngOnInit(): void {
        this.loginForm=this.formBuilder.group({
            Email:['',[Validators.required,Validators.pattern(this.Validations.emailRegex)]],
            Password:['',[Validators.required]]
        });
    }
    LoginClick()
    {
        debugger;
        alert("Welcome to my Application !!!");
    }

    get f()
    {
        return this.loginForm.controls;
    }

    onSubmit()
    {
        this.submitted=true;
        console.log(this.loginForm.value);
    }
}






