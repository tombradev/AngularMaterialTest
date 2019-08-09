/*
This file will contain centrelized import modules for angular material and other modules
All imported material module will have an export
*/


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* additional import
 */
import * as Material from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule

  ]
})
export class MaterialModule { } // the name of the link to other imports
