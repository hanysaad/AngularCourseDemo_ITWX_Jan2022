import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/CustomValidators/forbbiddenName.validator';
import { passwordMatchValidator } from 'src/app/CustomValidators/passwordMatch.validator';
import { IUser } from 'src/app/Models/iuser';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registerFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerFormGroup=fb.group({
      fullName: ['',[Validators.required, Validators.minLength(3), forbiddenNameValidator(/user/)]],
      email:  [''],
      mobileNumbers:  fb.array([""]),
      address: fb.group({
        city: [''],
        zipCode:  [0],
        street:  [''],
      }),
      password:  [''],
      confirmPassword:  [''],
      reachedThroughOther:[false],
      reachedThroughOtherReason: ['']
    }, { validators: passwordMatchValidator });

    // this.registerFormGroup=new FormGroup({
    //   fullName: new FormControl(''),
    //   email: new FormControl(''),
    //   mobileNumber: new FormControl(''),
    //   address: new FormGroup({
    //     city:new FormControl(''),
    //     zipCode: new FormControl(0),
    //     street: new FormControl('')
    //   }),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl('')
    // });
   }

  ngOnInit(): void {
  }

  get fullName()
  {
    return this.registerFormGroup.get('fullName');
  }

  get reachedThroughOther()
  {
    return this.registerFormGroup.get('reachedThroughOther');
  }

  get mobileNumbers()
  {
     
    const mobileNoArr: FormArray= this.registerFormGroup.get('mobileNumbers') as FormArray;
    return mobileNoArr;
  }

  updateValidation()
  {
    console.log('updateValidation');
    if (this.reachedThroughOther?.value=="1")
    {
      this.registerFormGroup.get('reachedThroughOtherReason')?.addValidators([Validators.required]);
    }
    else
    {
      this.registerFormGroup.get('reachedThroughOtherReason')?.clearValidators();
    }
    this.registerFormGroup.get('reachedThroughOtherReason')?.updateValueAndValidity()

  }

  addMobileNoInput()
  {
    const mobileNoArr=this.registerFormGroup.get('mobileNumbers') as FormArray;
    mobileNoArr.push(new FormControl(''));
  }
 

  register()
  {
    let userModel: IUser= this.registerFormGroup.value as IUser;
    // Call Service, and send userModel
    console.log(userModel);
  }



  fillForm()
  {
    //In case of edit profile
    // 1- Get User ID from URL
    // 2- Call Service to get current user profile
    // 3- Use PatchValue() to fill the form with data before edit
    this.registerFormGroup.patchValue({"fullName": "Test", "email": "test@test.com", "mobileNumber": "0111111111"}); // some of fields
    // this.registerFormGroup.setValue({"fullName": "Test", "email": "test@test.com", "mobileNumber": "0111111111"});// all form fields

  }

}
