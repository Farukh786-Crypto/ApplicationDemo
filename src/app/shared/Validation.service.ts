import { Injectable } from '@angular/core'

@Injectable()

export class ValidationService{
    constructor(){}

    public emailRegex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z.]+$';
    public mobileRegex ="[1-9]{1}[0-9]{9}"
}










