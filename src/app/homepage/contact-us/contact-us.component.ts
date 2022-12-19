import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { IContact } from 'src/app/models/i-contact.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, IContact {


    public iconPhone = faPhone;
    public iconEnvelope = faEnvelope;
    public iconLocationDot = faLocationDot;
    public pageTitle: string = "Contact"

    public firstname!: string;
    public email!: string;
    public subject!: string;
    public message!: string;

    public contactForm: FormGroup = new FormGroup({});

  constructor(
    @Inject(DOCUMENT) private readonly documentRef: Document,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { 
    this.createForm()
  }


  ngOnInit(): void {
  }


  /**
   * Création du groupe des inputs du formulaire de contact
   */
  private createForm()
  {
    this.contactForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', [Validators.required, Validators.minLength(10) ,Validators.maxLength(30)]],
        message: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(200)]]
    });
  }



  public isFirstnameValid()
  {
      return this.invalidInput('firstname');
  }

  public isEmailValid()
  {
    return this.invalidInput('email');
  }

  public isSubjectValid()
  {
    return this.invalidInput('subject');
  }


  public isMessageValid()
  {
    return this.invalidInput('message');
  }


  private invalidInput(input: string)
  {
    return this.contactForm.controls[input].invalid && (this.contactForm.controls[input].dirty || this.contactForm.controls[input].touched);
  }

  public isFormValidated()
  {
    return this.contactForm.pristine || this.contactForm.invalid;
  }

  sendDatasForContact() {
    console.log('Data sended :', {firsname: this.firstname, email: this.email, subject: this.subject, message: this.message});
    this.snackBar.open('Your message has been send', 'OK', {duration: 3000, horizontalPosition: 'end', verticalPosition: 'top'});

    this.documentRef.location.reload();
}

}
