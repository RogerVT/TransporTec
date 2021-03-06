import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import {PassengerRoutingModule} from "~/app/passenger/passenger-routing.module";
import { PassengerComponent } from './components/passenger.component';
import {SharedModule} from "~/app/shared/shared.module";
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';

@NgModule({
  declarations: [
      PassengerComponent,
      MainScreenComponent,
      PassengerInfoComponent,
  ],
  imports: [
      NativeScriptCommonModule,
      PassengerRoutingModule,
      SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PassengerModule { }
