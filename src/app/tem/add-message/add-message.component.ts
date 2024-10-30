import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-message.component.html',
  styles: ``
})
export class AddMessageComponent implements OnInit{

  formGroup!:FormGroup;

  constructor(public messageservice: MessageserviceService, private fb: FormBuilder){}
  alumno: string=""

ngOnInit(): void{
      this.formGroup=this.initForm();
}
  initForm(): FormGroup<any> {
    throw new Error('Method not implemented.');
  }
  NgForm(): FormGroup  {
      return this.fb.group({
        nombre:['']
   } )
  }

  addAlumno(){
    let {nombre}=this.formGroup.value;
    this.messageservice.add(nombre)
    this.formGroup.get('nombre')?.setValue('')  }

}
