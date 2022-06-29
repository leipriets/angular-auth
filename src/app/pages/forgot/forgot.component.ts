import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  form: FormGroup;
  class = '';
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ''
    })
  }

  public submit(): void {
    this.http.post('http://localhost:8000/api/reset/forgot', this.form.getRawValue())
      .subscribe(() => {
        this.class = 'success';
        this.message = 'Email was sent';
      },
        () => {
          this.class = 'danger';
          this.message = 'Email does not exist!';
        }
      )
  }
}
