import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink , RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  inputValue: string = '';
  //  handleChangeInputValue(event:any){
  //    console.log(event.target.value);
  //    this.inputValue=event.target.value

  //}
  handleAddValue() {
    console.log(this.inputValue);
  }
  handleFormSubmit(form: any) {
    console.log(form.controls);
  }
}
