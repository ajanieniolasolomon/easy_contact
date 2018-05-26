import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MaterialModule {}