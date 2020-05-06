import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  constructor(private fb: FormBuilder) { 
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

}
