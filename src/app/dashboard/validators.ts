import { AbstractControl } from "@angular/forms";

export function googleMail(control:AbstractControl){
    if(control.value.includes('@googleMail.com')){
        return null;
    }else{
        return {'GoogleMail':'Please use google Mail only'};
    }
}