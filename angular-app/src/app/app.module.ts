import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HelloComponent } from "./hello/hello.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }
