import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HelloComponent } from "./hello/hello.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageComponent } from "./message/message.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }
