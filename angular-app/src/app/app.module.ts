import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HelloComponent } from "./hello/hello.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageComponent } from "./message/message.component";
import { MycheckService } from "./mycheck.service";
import { MystyleDirective } from "./mystyle.directive";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'msg', component: MessageComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MessageComponent,
    MystyleDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor() { }
}
