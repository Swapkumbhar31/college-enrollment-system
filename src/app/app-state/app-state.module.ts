import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {ProfileEffects} from "./profile/profile.effects";
import {EffectsModule} from "@ngrx/effects";
import {profileReducer} from "./profile/profile.reducer";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      profile: profileReducer,
    }),
    EffectsModule.forRoot([
      ProfileEffects,
    ])
  ],
  exports: [
    StoreModule
  ]
})
export class AppStateModule {
}
