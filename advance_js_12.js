class student{

    static i=0;
   
    constructor(name,age,phone,marks)
   
    {
   
     this.name=name;
   
     this.age=age;
   
     this.phone=phone;
   
     this.marks=marks;
   
     student.i+=1;
   
    }
   
     
   
    eligibilty()
   
    {
   
     if(this.age>40)
   
     {
   
      console.log("eligible")
   
     }
   
     else
   
     {
   
      console.log(" Not eligible")
   
     }
   
    }
   
    total_student()
   
    {
   
   let temp=student.i;
   
     console.log("Total number of student"+temp);
   
    }
   
   eligible_for_placement()
   {
     
     return (score,min_age)=>{
       if(this.marks>score && this.age>min_age)
       {
         console.log(this.name)
       }
     }
   }
   }
   
   
   
   const stud1=new student("Rohit",22,90987899,81)
   
   const stud2=new student("Barry",25,90987899,78)
   
   const stud3=new student("Allen",29,90987849,38)
   
   const stud4=new student("Mr Freeze",25,903457899,78)
   
   const stud5=new student("Smmith",25,909209899,98)
   
   stud1.eligible_for_placement()(67,22)
   stud2.eligible_for_placement()(67,23)
   stud3.eligible_for_placement()(67,23)
   stud4.eligible_for_placement()(67,23)
   stud5.eligible_for_placement()(67,23)