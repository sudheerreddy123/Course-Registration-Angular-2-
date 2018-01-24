import { Component, OnInit, Input } from '@angular/core';
import { Course } from "../course/course";

@Component({
  selector: 'app-coursedetail',
  template: `<div class="media">
               <div class="media-left">
                  <a href="#" >
                   <img class="media-object" src= {{selectedcourse.image}} alt="" height="200" width="200">
                   </a>
                </div>
                   <div class="media-body" >
                     <h4 class="media-heading">{{selectedcourse.name}}</h4>
                      Description: {{selectedcourse.description}}
                       Instructor: {{selectedcourse.instructor}} <br/>
                      Available: {{selectedcourse.availableseats}}
                   </div>
    </div>
    `,
  styles: []
})
export class CoursedetailComponent implements OnInit {


@Input()
selectedcourse:Course;
 
  constructor() {

   }

  ngOnInit() {
  }

}
