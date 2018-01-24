export class Course{
  
    constructor(public courseId:number, public name:string, public description:string,
    public instructor:string, public active:boolean, public image:string, public availableseats:number)    
    {

    }
}