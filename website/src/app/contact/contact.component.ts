import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email=new FormControl('abc@gamail.com',[
    Validators.minLength(2),
    Validators.maxLength(10),
    Validators.required]);
  showEmailDetails()
  {
 
    console.log('errors ',this.email.errors);
    console.log('valid',this.email.valid);
  }

}
