import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    arrows: true
  }

  constructor (private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[789]\d{9}$/)]],// /^[0-9]{10}$/
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
          // this.successMessage = 'Form submitted successfully!';
          this.toastr.success('Form submitted successfully!', 'Success');
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (error) => {
          // this.errorMessage = 'Error submitting form. Please try again.';
          this.toastr.error('Error submitting form. Please try again.', 'Error');
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
      // this.errorMessage = 'Please fill out all required fields correctly.';
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
