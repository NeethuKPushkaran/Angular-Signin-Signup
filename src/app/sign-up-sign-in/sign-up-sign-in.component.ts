import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-sign-in',
  templateUrl: './sign-up-sign-in.component.html',
  styleUrls: ['./sign-up-sign-in.component.css',]
})
export class SignUpSignInComponent implements OnInit{
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userName: '',
    password: ''
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }
  onSignUp(){

    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }

  onLogin(){
    debugger
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert('User Logged In successfully!!');
    } else{
      alert('Wrong credentials!!');
    }
  }
}
