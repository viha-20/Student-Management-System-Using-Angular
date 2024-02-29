import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user_records: any[] = [];
  data = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: ""
  };

  ngOnInit(): void {
  }

  doRegistration(Values: any): void {
    this.user_records = JSON.parse(localStorage.getItem('users') || '[]');

    if (this.user_records.some((v) => v.email === this.data.email)) {
      alert('Duplicate Data');
    } else {
      this.user_records.push({ ...this.data }); // Copy data to avoid reference issues
      localStorage.setItem("users", JSON.stringify(this.user_records));
      alert("Hi " + this.data.name + " you are successfully Registered");
    }
  }
}
