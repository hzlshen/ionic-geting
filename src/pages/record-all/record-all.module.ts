import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordAllPage } from './record-all';

@NgModule({
  declarations: [
    RecordAllPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordAllPage),
  ],
})
export class RecordAllPageModule {}
