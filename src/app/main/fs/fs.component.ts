import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup , Validators, AbstractControl} from '@angular/forms';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-fs',
  templateUrl: './fs.component.html',
  styleUrls: ['./fs.component.css']
})
export class FsComponent implements OnInit {
  formgroup: FormGroup ;
  email: AbstractControl;


  constructor(public formbuilder: FormBuilder, private router: Router) {

    this.formgroup = formbuilder.group({
      email: ['', Validators.email],

});
this.email = this.formgroup.controls['email'];

   }

  ngOnInit() {
  }
  onSubmit(formgroup) {
   console.log(formgroup );
  }
}
