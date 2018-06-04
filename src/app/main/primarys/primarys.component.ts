import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {FormBuilder, FormGroup , Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-primarys',
  templateUrl: './primarys.component.html',
  styleUrls: ['./primarys.component.css']
})
export class PrimarysComponent implements OnInit {
  Message$: Observable<Message[]>;
  data;
  message;
  message2: any;
  id;
  email;
  super;
  formgroup: FormGroup ;
sucess;
error;
load = false;
com;
reply: AbstractControl;

  constructor(private service: MainService, private router: ActivatedRoute, public formbuilder: FormBuilder) {
    this.formgroup = formbuilder.group({

     reply: ['', Validators.required]

});
this.reply = this.formgroup.controls['reply'];
   }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
   // this.Message$ = this.router.snapshot.data['data'].valueChanges();
this.service.getMessageByid(id).subscribe((x: Message) => {

this.super = this.router.snapshot.paramMap.get('id');
[this.id, this.email, this.message] = [x.id, x.email, x.message];
});
this.service.viewRespond(id).subscribe(y => {
this.message2 = y;
this.load = true;
},
err => console.log(err),
() => {this.com = 'Loading complete'; }
);
  }
  onSubmit(formgroup) {
    console.log(formgroup.value.reply);
    this.service.replyRespond(formgroup.value.reply, this.email, this.router.snapshot.paramMap.get('id'))
    .then(() => {
      this.sucess = 'Sent';
        setTimeout(() => {
         this.sucess = null;
        }, 2000);
        this.formgroup.reset();

    })
    .catch(err => {
      console.log(err);
      this.error = err;
      setTimeout(() => {
       this.error = null;
      }, 2000);
       });
  }

}
interface Message {
  email: any;
username: any;
phone_number: any;
message: any;
id?: string;
}