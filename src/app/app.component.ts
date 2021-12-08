import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataserviceService }from './dataservice.service'
import { id } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'taskdemo';
  rows:any=[];
  columns:any=[];
  totalCount:any;
  page: number = 1;
  offset: number = 0;
  nexturl:any;
  prevyrl:any;
  baseUrl="https://swapi.dev/api/planets/"
  constructor(private data:DataserviceService) { }

  ngOnInit(): void {
    this.getapi(this.baseUrl);
  }
  
  getapi(base:any){
   
    
    this.data.getData(base).subscribe((posts:any) => {
      this.rows= posts['results'];
      this.totalCount = posts['count'];
      this.nexturl = posts['next'];
      this.prevyrl = posts['previous'];
     
  });
  }
  setPage(event: any){
    if (this.offset < event.offset) {
      this.baseUrl = this.nexturl;
    }else if(this.offset > event.offset){
      this.baseUrl = this.prevyrl;
    }
    this.offset = event.offset;
    this.getapi(this.baseUrl);
  }
}
