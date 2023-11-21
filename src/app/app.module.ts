import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ApiService } from "./api.service";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { featureReducer } from "./store/reducers/reducer";
import { EffectsModule } from "@ngrx/effects";
import { FeatureEffects } from "./store/effects/effects";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ feature: featureReducer }),
    EffectsModule.forRoot([FeatureEffects])
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule {}
