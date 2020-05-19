import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {AppComponent} from './app.component';
import {CustomEmails} from "./custom-textbox.component";

@NgModule({
    declarations: [
        AppComponent,
        CustomEmails
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
