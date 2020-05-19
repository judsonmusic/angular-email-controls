import { Component, Input, Optional, Self } from "@angular/core";
import {
  ControlValueAccessor,
  NgControl,
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-custom-emails",
  templateUrl: "./custom-textbox.html",
  styleUrls: ["./_custom-textbox.scss"]
})
export class CustomEmails{

  @Input()
  public form: any;

  public get emails() {
    return this.form.get('emails') as FormArray;
  }

  public emailForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
   
  }

  public handleChange(): void {
    // console.log(this.emailForm.get("emails").value);
  }

  public addEmail() {
    console.log(this.form);
    const emailsArray = this.form.get("emails") as FormArray;
    const emailGroup = this.createEmailGroup();
    this.emails.push(emailGroup);
    this.handleChange();
  }

  private createEmailGroup(email?: any) {
    const emailGroup = this.formBuilder.group({
      id: new FormControl(this.emails.length + 1),
      email: new FormControl(null, Validators.required)
    });
    return emailGroup;
  }
}
