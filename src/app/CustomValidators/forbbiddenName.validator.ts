import { AbstractControl } from "@angular/forms";

// export function forbiddenNameValidator(control: AbstractControl)
// {
//   const regExp:RegExp=/admin/i;
//   const validationRes={'forbiddenName':{'value':control.value }};
//   return regExp.test(control.value)? validationRes: null;
// }

//Custom validator
export function forbiddenNameValidator(forbiddenPattern:RegExp)
{
    return (control: AbstractControl)=>{
        // const regExp:RegExp=/admin/i;
        const validationRes={'forbiddenName':{'value':control.value }};
        return forbiddenPattern.test(control.value)? validationRes: null;
    }
}