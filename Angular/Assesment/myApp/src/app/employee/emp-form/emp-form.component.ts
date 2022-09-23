import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataShareService } from 'src/app/employee/service/data-share.service';
import { emp } from '../emp';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})
export class EmpFormComponent implements OnInit {

  // @ViewChild ('formdata') userform?: NgForm;
  form: FormGroup;
  public formdata: emp[]

  constructor(private formB: FormBuilder,
    public dataService: DataShareService
  ) {
    this.form = this.formB.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      gender: ['', [Validators.required, Validators.pattern('^[m|f|o|M|F|O]$')]],
      dob: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    })

    this.formdata = []
  }

  ngOnInit(): void {
    this.getEmpList();
  }

  private getEmpList(): void {
    this.dataService.getEmp().subscribe((rspns: emp[]) => { this.formdata = rspns });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.dataService.addEmp(this.form.value).subscribe((Response) => { this.getEmpList(); });

      this.onReset();
    } else { alert("fill up form") }

    // console.log(this.form);

    // if(this.form.valid){
    //   this.formdata.push(this.form.value);
    //   this.onReset();
    // } else { alert("fill up form") }
  }

  onReset() {
    this.form.reset();
  }
}
