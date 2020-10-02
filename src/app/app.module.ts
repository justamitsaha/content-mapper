import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetJSONComponent } from './component/get-json/get-json.component';
import { ContentNodeComponent } from './component/content-node/content-node.component';
import { ContentKeyValueComponent } from './component/content-key-value/content-key-value.component';

@NgModule({
  declarations: [
    AppComponent,
    GetJSONComponent,
    ContentNodeComponent,
    ContentKeyValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
