import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '../shared/Validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm:FormGroup;
  submitted:boolean=false;

  constructor(private formBuilder: FormBuilder,
            private Validations:ValidationService,
            private router:Router) { }

  ngOnInit() {
    this.registrationForm=this.formBuilder.group({
      FirstName:['',[Validators.required]],
      LastName:['',[Validators.required]],
      MobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      Email:['',[Validators.required,Validators.pattern(this.Validations.emailRegex)]],
  });
  }
  RegistrationClick()
  {
      debugger;
      alert(" !!!");
  }

  onMobileNumberInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    inputElement.value = numericValue;
  }

  get f()
  {
      return this.registrationForm.controls;
  }

  onSubmit()
  {
      this.submitted=true;
      console.log(this.registrationForm.value);
      this.router.navigateByUrl("login");
  }
}
