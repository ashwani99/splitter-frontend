import { FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, otherControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const otherControl = formGroup.controls[otherControlName];

        if (!control || !otherControl) {
            return null;
        }

        if (control.errors && !otherControl.errors.mustMatch) {
            return null;
        }

        if (control.value !== otherControl.value) {
            otherControl.setErrors({ mustMatch: true });
        } else {
            otherControl.setErrors(null);
        }
    }
}
