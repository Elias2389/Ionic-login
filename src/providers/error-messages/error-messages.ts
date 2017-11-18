import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";
import {AlertController, LoadingController} from "ionic-angular";
import {TranslateService} from "@ngx-translate/core";


@Injectable()
export class ErrorMessagesProvider {


  constructor(public http: HttpClient, public loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              public translateService: TranslateService) {
    console.log('Hello ErrorMessagesProvider Provider');
  }


  manageError(rc) {
    let title, message, confirm, cancel;
    // let rcResponse = (rc == undefined || rc == '')?'-100':rc;

    this.translateService.get('NOTIFICATIONS.TITLE').subscribe(
      value => {
        title = value;
      }
    );

    //Var if confirm and cancel
    this.translateService.get('BUTTONS.CONFIRM').subscribe((response:string)=>{
      confirm = response;
    });
    this.translateService.get('BUTTONS.CANCEL').subscribe((response:string)=>{
      cancel = response;
    });

    //Search message in language
    this.translateService.get('RC.'+rc).subscribe(
      value => {
        message = value;
      }
    );

    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: confirm,
          handler: () => {
            console.log('Presionó Aceptar/Confirmar');
          }
        }
      ]
    });
    alert.present();
  }




}
