import {Component} from "@angular/core";

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent{
  private user: string;
  private pass: string;

  public login(): void{
    alert("I'm in Login");
  }
}
