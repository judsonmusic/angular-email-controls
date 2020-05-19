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
  public formGroup: FormGroup;
  @Input()
  public formArrayName: string;
  @Input()
  public emailTypes: any;

  get emails(){
    return this.formGroup.get(this.formArrayName) as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  public addEmail() {    
    const emailGroup = this.createEmailGroup();
    this.emails.push(emailGroup);
    console.log(this.emails)
  }

  private createEmailGroup(email?: any) {
    const emailGroup = this.formBuilder.group({
      id: new FormControl(this.emails.length + 1),
      type: new FormControl(null),
      email: new FormControl(null, Validators.required)
    });
    return emailGroup;
  }
}
