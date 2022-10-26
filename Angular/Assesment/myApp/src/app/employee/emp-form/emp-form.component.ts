import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataShareService } from 'src/app/employee/service/data-share.service';
import { emp } from '../model/emp';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})

export class EmpFormComponent implements OnInit {

  form: FormGroup;
  public formdata: emp[];
  public id: any;

  public tags: any;
  public temp: number;

  constructor(
    public formB: FormBuilder,
    public dataService: DataShareService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public toaster: ToastService
  ) {

    this.temp = 0;
    this.tags = [
      { id: 1, name: 'Front-End' }, { id: 2, name: 'Back-End' }
    ];

    this.form = this.formB.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      gender: ['', [Validators.required, Validators.pattern('^[m|f|o|M|F|O]$')]],
      dob: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      roles: ['', [Validators.required]]
    })

    this.formdata = []

    this.actRoute.params.subscribe((params: any) => {
      this.id = params['id'];
      if (this.id) {
        this.getEmpById();
      }
    })

  }

  ngOnInit(): void {
    this.getEmpList();
  }

  private getEmpList(): void {
    this.dataService.getEmp().subscribe((rspns: emp[]) => { this.formdata = rspns });
  }

  onSubmit(): void {
    if (this.form.valid) {

      if (this.id) {
        this.dataService.editEmp(this.form.value, this.id).subscribe((result) => {
          this.getEmpList();
          this.onReset();
          this.toastInfo();
          this.router.navigate(['./form'], { relativeTo: this.actRoute.parent })
        });
      } else {
        this.dataService.addEmp(this.form.value).subscribe((result) => {
          this.getEmpList();
          this.onReset();
          this.toastSuccess();
        });
      }

      this.onReset();
    } else { alert("fill up form Correctlly") }

  }

  getEmpById() {
    this.dataService.getEmpById(this.id).subscribe((result) => {
      this.form.patchValue(result);
    })
  }

  onReset() {
    this.form.reset();
  }

  onEdit(data: emp) {
    this.form.patchValue(data);
  }

  // Toast Service Fns
  public toastSuccess() {
    this.toaster.onSuccess('Data Add Successfully', 'Message');
  }
  public toastInfo() {
    this.toaster.onSuccess('Data Edit Successfully', 'Message');
  }


}
