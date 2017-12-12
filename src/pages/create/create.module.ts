import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePage } from './create';

@NgModule({
  declarations: [
    CreatePage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePage),
  ],
})
export class CreatePageModule {}
