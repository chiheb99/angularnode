import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private Http:HttpClient,){}
  saveUser(data:any) {
     
    return this.Http.post("http://localhost:5000/create-pdf",data)
    .subscribe(() => this.Http.get('http://localhost:5000/fetch-pdf', { responseType: 'blob' }))
     
  }
  ngOnInit(): void {
      
  }
 userForm= new FormGroup({
    nom  : new FormControl('',Validators.required),
    prix : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required)
  });
  getUserFormData(data:any){
   console.warn(data);
   this.saveUser(data);
   
 }
  
}
