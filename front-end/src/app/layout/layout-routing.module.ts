import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
      },
      {
        path: "dashboard",
        loadChildren: "./dashboard/dashboard.module#DashboardModule",
      },
      {
        path: "search",
        loadChildren: "./search/search.module#SearchModule",
      },
      {
        path: "accounts",
        loadChildren: "./accounts/accounts.module#AccountsModule",
      },
      {
        path: "meetings",
        loadChildren: "./meetings/meetings.module#MeetingsModule",
      },
      {
        path: "schedule",
        loadChildren: "./schedule/schedule.module#ScheduleModule",
      },
      {
        path: "documents",
        loadChildren: "./documents/documents.module#DocumentsModule",
      },
      {
        path: "messages",
        loadChildren: "./messages/messages.module#MessagesModule",
      },
      {
        path: "settings",
        loadChildren: "./settings/settings.module#SettingsModule",
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
