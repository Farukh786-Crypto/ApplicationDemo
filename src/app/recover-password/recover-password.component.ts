import {Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { ValidationService } from '../shared/Validation.service';

@Component({
    selector:'app-recover-password',
    templateUrl:'./recover-password.component.html',
    styleUrls:['./recover-password.component.css']
})

export class RecoverPasswordComponent implements OnInit{
    title:string='Recover component worked ..';
    recoverForm:FormGroup;

    constructor(private formbuilder:FormBuilder,
                private Validations:ValidationService
        ){}

    ngOnInit(): void {
        this.recoverForm=this.formbuilder.group({
            mobile:['',[Validators.required,Validators.pattern(this.Validations.mobileRegex)]]
        })   
    }

    get f()
    {
        return this.recoverForm.controls;
    }

    VerifyMobileNo()
    {
        console.log(this.recoverForm.value);
    }
}







