import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviteModePage } from './invite-mode';

@NgModule({
  declarations: [
    InviteModePage,
  ],
  imports: [
    IonicPageModule.forChild(InviteModePage),
  ],
})
export class InviteModePageModule {}
