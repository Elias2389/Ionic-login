import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {ErrorMessagesProvider} from "../../providers/error-messages/error-messages";
import {LoginUserProvider} from "../../providers/login-user/login-user";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;
  password:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public errorMessagesProvider: ErrorMessagesProvider,
              public userData:LoginUserProvider,private alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){

    if(this.username == undefined || this.username == '' || this.password == undefined || this.password == ''){
      this.errorMessagesProvider.manageError('-9000');
    }else{
      this.userData.loginUser(this.username, this.password)
        .then(response => {
          console.log(response);

          if(response == undefined){
            this.errorMessagesProvider.manageError('-300');
          }
          else{
            this.navCtrl.setRoot(HomePage);
          }
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  forgotPassword() {

    let forgotPassword = this.alertCtrl.create();
    forgotPassword.setTitle('Recuperar contraseña');

    forgotPassword.addInput({
      type: 'input',
      name: 'dni',
      placeholder: 'Documento de identidad',
      // value: 'dni'
    });
    forgotPassword.addInput({
      type: 'input',
      name: 'email',
      placeholder: 'Email',
      // value: 'dni'
    });

    //Agregar botones
    forgotPassword.addButton('Cancelar');
    forgotPassword.addButton({
      text: 'Aceptar',
      handler: (data: any) => {
        console.log('Datos:', data);
      }
    });
    forgotPassword.present();
  }
















}
