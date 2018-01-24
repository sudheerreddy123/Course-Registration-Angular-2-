import { Component, OnInit,ElementRef } from '@angular/core';
import { Course} from '../course/course';

@Component({
  selector: 'app-courselist',
  template: `<h2> Welcome to Course Registration </h2>
           <h3> <b>Available Courses </b></h3><br/>
    <div class="row">
         <div class="col-md-5 col-lg-5 col-sm-5 col-xs-5" >
           <div class="list-group" *ngFor= "let course of courses">
            <a href="#" class="list-group-item" (click)="courseClicked=course" class="alert alert-info">
           <span class="badge" >   {{course.availableseats}} </span>
                      {{course.name}}
           </a>
         </div>
       </div>
     <div class="col-md-7 col-lg-7 col-sm-7 col-xs-7" *ngIf = "courseClicked !=null">
        <app-coursedetail [selectedcourse]="courseClicked" > </app-coursedetail><br/>
        <button class="alert alert-info" >Add to cart</button>
    </div>
</div>`,
styles:[]
})
export class CourselistComponent implements OnInit {
courses:Array<Course>=[ new Course(1,'Java', 'object oriented program','Sachin',true,'/assets/java.jpg',10),
       new Course(2,'Advanced Java', 'Advanced java','Sukesh',true,'/assets/java2.jpg',6),
       new Course(3,'Javaweb', 'java server forms','tendulkar',true,'/assets/jsf.jpg',8),
       new Course(4,'serversideprogram', 'Servlets in java','Shewag',true,'/assets/servlet.jpg',11),
       new Course(5,'Spring', 'Java framework','Dravid',false,'/assets/spring.jpg',4)];
  constructor(){

  } 

   courseClicked:Course;

  ngOnInit() {
  }

}
