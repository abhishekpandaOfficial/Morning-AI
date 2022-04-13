import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
      name:new FormControl('', [
        Validators.required,
        //Validators.minLength(3)
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      age:new FormControl('',[
        Validators.minLength(5),
        Validators.maxLength(80),
        Validators.required
      ]),
      password:new FormControl('',[
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.required
      ]),
      confirm_password:new FormControl('',[
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.required
        
      ]),
      phoneNumber:new FormControl('',[
        Validators.min(12),
        Validators.required,
        
      ])
  })

}
