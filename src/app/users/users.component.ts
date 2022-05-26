import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

export interface User{
  _id: string;
  name: string,
  surname: string,
  email: string,
  password: string,
  role: string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: object;
  userForm;
  
  cambios=[];
  displayedColumns: string[] = ['name', 'surname', 'email', 'role'];
  dataSource: MatTableDataSource<User>

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;
  
  constructor(private userService: UsuariosService, private formBuilder: FormBuilder) { 
    this.userService.getUsers().subscribe(data =>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.userForm = this.formBuilder.group({
      name: '',
      surname: '',
      email: '',
      password: '',
  });
  }

  ngOnInit(): void {
    
  }

  onSubmit(f){
    if(f){
      console.log('Registrado', f);
      this.userService.addUser(f).subscribe((data: any[])=>{
        console.log(data);
        this.user = data;
        Swal.fire(
          'Good job!',
          'Registro exitoso!',
          'success'
        )
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo Ocurrio'
      })
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
 

}
