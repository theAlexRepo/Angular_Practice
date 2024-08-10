import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  // Interpolation here 
  public name: string = "Dua Lipa"
  public myId: string  = "testId"
  // Binding
  public isDisabled: boolean = false;
  greetUser() {
    return "Hello " + this.name;
  }
}
