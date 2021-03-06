import { Component, OnInit } from '@angular/core';
import * as dialogs from "tns-core-modules/ui/dialogs";
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'ns-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
  moduleId: module.id,
})
export class MainScreenComponent implements OnInit {

    boolShowInfo: boolean = false;

  //--------------------------------------------------------------------------------------------------------------------
  constructor(private router: RouterExtensions) { }
  //--------------------------------------------------------------------------------------------------------------------
  ngOnInit() {
      this.boolShowInfo = false;
  }
  //--------------------------------------------------------------------------------------------------------------------
  onImageClick() {

      if(!this.boolShowInfo) {
          this.boolShowInfo = true;
      } else {
          this.boolShowInfo = false;
      }
  }
  //--------------------------------------------------------------------------------------------------------------------
  onLogOut(strMessage: string) {

    dialogs.confirm({
            message: strMessage,
            okButtonText: "Ok",
            cancelButtonText: "Cancel text"
        }).then(result => {
        // result argument is boolean

        if(result){
            this.router.navigate([''], {clearHistory: true});
        }

    });


  }

}
