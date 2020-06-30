import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import moment from 'moment';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup

  constructor(private fb: FormBuilder){
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      dateTo: ['', Validators.required ],
      dateFrom: ['', Validators.required ]
    }, {validator: this.dateLessThan('dateFrom', 'dateTo')});
  }
  
  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: "Date from should be less than Date to"
        };
      }
      return {};
    }
}
  
  onSubmit() {
    console.log("Probando")
    console.log(this.form)
    console.log(this.form.value)
  }

}
