import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { PrimaryComponent } from './primary/primary.component';
import { PrimarysComponent } from './primarys/primarys.component';
import { HistoryComponent } from './history/history.component';
import { BinComponent } from './bin/bin.component';
import { SettingComponent } from './setting/setting.component';
import { RegComponent } from './reg/reg.component';
import { FsComponent } from './fs/fs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {  path: 'dash', component: DashComponent, children: [
    { path: '', component: PrimaryComponent },
    { path: 'more/:id', component: PrimarysComponent},
    { path: 'history', component: HistoryComponent },
    { path: 'bin', component: BinComponent },
    { path: 'setting', component: SettingComponent },
  ] },

  { path: 'reg', component: RegComponent },
  { path: 'forget-password', component: FsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
