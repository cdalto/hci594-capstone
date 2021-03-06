import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';

import { NavMenuService } from './services/nav-menu.service';
import { CurrentTaskComponent } from './current-task/current-task.component';
import { SyncDeviceComponent } from './sync-device/sync-device.component';
import { SyncSuccessfulComponent } from './sync-successful/sync-successful.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SettingsComponent,
    TasksComponent,
    AddTaskComponent,
    CurrentTaskComponent,
    SyncDeviceComponent,
    SyncSuccessfulComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'settings', component: SettingsComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'add-task', component: AddTaskComponent },
      { path: 'add-task', component: AddTaskComponent },
      { path: 'current-task', component: CurrentTaskComponent },
      { path: 'sync-device', component: SyncDeviceComponent },
      { path: 'sync-successful', component: SyncSuccessfulComponent },
    ])
  ],
  providers: [NavMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
