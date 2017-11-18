import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../mocks/user-interface";
import {USERS} from "../mocks/users";


@Injectable()
export class LoginUserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginUserProvider Provider');
  }

  getUser():Promise<User[]>{
    console.log('Login');
    return Promise.resolve(USERS);
  }

  loginUser(username,password):Promise<User>{
    let user:User;
    user= this.find(username,password);
    return Promise.resolve(user);
  }

  find(username,password):User{
    let user: User;
    user = USERS.find(x => x.username == username);
    // console.log(user);

    if(user === undefined){
      return undefined;
    }

    if(user.password == password){
      return user;
    }
  }

}
