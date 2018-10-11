import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./home/home.component";
import { CallbackComponent } from "./callback/callback.component";
import { SprintTabComponent } from "./sprints/sprints.component";
import { PastSprintComponent } from "./past-sprint/past-sprint.component";
import { NewSprintComponent } from "./newsprint/newsprint.component";
import { HttpClientModule } from "@angular/common/http";
import { OngoingSprintComponent } from "./progress/progress.component";

import { NgCircleProgressModule } from "ng-circle-progress";

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from "@angular/material";
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CallbackComponent,
    SprintTabComponent,
    PastSprintComponent,
    NewSprintComponent,
    OngoingSprintComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: "about", component: AboutComponent },
      { path: "", redirectTo: "about", pathMatch: "full" },
      { path: "callback", component: CallbackComponent }
    ]),

    RouterModule.forChild([
      { path: "about", component: AboutComponent },
      { path: "sprint", component: SprintTabComponent }
    ]),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 120,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#00c039",
      innerStrokeColor: "#00c039",
      animationDuration: 150,
      percent: 100
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
