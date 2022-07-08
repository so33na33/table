import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private api:ServiceService) { 
    api.viewTodos().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  ngOnInit(): void {
  }

  data:any=[]
}
