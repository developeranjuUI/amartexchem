import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor (private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService) {
      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        mobile: ['', [Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.maxLength(255)]]
      });
    }
    ngOnInit(): void { }

    onSubmit() {
      this.submitted = true;
      this.successMessage = null;
      this.errorMessage = null;
  
      if(this.contactForm.valid) {
        const formData = this.contactForm.value;
        this.contactService.sendFormData(formData).subscribe({
          next: (response: any) => {
            this.toastr.success('Form submitted successfully!', 'Success');
            this.contactForm.reset();
            this.submitted = false;
          },
          error: (error) => {
            this.toastr.error('Error submitting form. Please try again.', 'Error');
          }
        });
      } else {
        this.contactForm.markAllAsTouched();
        this.toastr.warning('Please fill out all required fields correctly.', 'Invalid Form');
      }
    }
    onMobileInput(event: Event) {
      const input = event.target as HTMLInputElement;
      let value = input.value.replace(/\D/g, '');
      input.value = value;
      this.contactForm.get('mobile')?.setValue(value, { emitEvent: true });
    }

}
