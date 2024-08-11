import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  // Interpolation here 
  public name: string = "Dua Lipa"
  public myId: string  = "testId"
  // Binding
  public isDisabled: boolean = false;
  public successClass: string = "text-success";
  public hasError: boolean = false;

  public isSpecial: boolean = false;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,

  }
  greetUser() {
    return "Hello " + this.name;
  }
}
