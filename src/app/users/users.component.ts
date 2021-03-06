import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { UpdateUserComponent } from '../update-user/update-user.component';
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
  formUser: any;
  dialogRef;

  cambios=[];
  displayedColumns: string[] = ['name', 'surname', 'email', 'role', 'actions'];
  dataSource: MatTableDataSource<User>

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;
  
  constructor(private userService: UsuariosService, private formBuilder: FormBuilder) { 
    // Obtener todos los usuarios y listarlos
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

  ngOnInit(){
    
  }

  //Registrar los usuarios

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
        ).then(function(){
          location.reload();
        })
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
 
  //Eliminar usuarios

  deleteUser(id: string){
    this.userService.delete(id).subscribe(data =>{
      console.log(data);
      Swal.fire(
        'Good job!',
        'Eliminado!',
        'success'
      ).then(function(){
        location.reload();
      })
    })
  }

  //Actualizar usuarios

  


}

  



