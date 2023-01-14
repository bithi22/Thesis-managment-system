import { FilePresent } from '@mui/icons-material'
import React, { PureComponent, useState } from 'react'
import './StudentFormDesign.css'
import {useForm} from 'react-hook-form'
import Axios from 'axios'
import { useEffect } from "react";
export default function ThesisForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  

  const [thesis_id,setThesis_id] = useState("")
  const [author1_id,setAuthor1_id] = useState("")
  const [author2_id,setAuthor2_id] = useState("")
  const [author3_id,setAuthor3_id] = useState("")
  const [supervisor1_id,setSupervisor1_id] = useState("")
  const [supervisor2_id,setSupervisor2_id] = useState("")
  const [supervisor3_id,setSupervisor3_id] = useState("")
  const [category,setCategory] = useState("")
  const [course_id,setCourse_id] = useState("X")
  const [title,setTitle] = useState("")
  const [PDF,setPDF] = useState("")
  const [publication_year,setPublication_year] = useState(1)
  const [publication,setPublication] = useState("")
  const [type,setType] = useState("")
  const [date_of_submission,setDate_of_submission] = useState("")
  const [keyword1,setKeyword1] = useState("")
  const [keyword2,setKeyword2] = useState("")
  const [keyword3,setKeyword3] = useState("")

  let one = "00";
  let two = "00";
  let three = "00";

  let generated_id = "";

  
  var author = useState([]);
  var supervisor = useState([]);

  const checkAuthor1 = (event)=>
  {
      if(title === "" || category === "" || PDF === "" || publication_year === "" || type === "" ||
             date_of_submission === "")
      {
          alert("Please insert necessary data")
          return ;
      }
      
      console.log("Inside check author 1")
      if(author1_id==="")
      {
         alert("Author1-id can't be empty")
         return ;
      }
      
      Axios.post("http://localhost:3001/checkAuthor",{
            student_id: author1_id,
        }).then((response)=>{
            console.log(response)
            author = response.data
            if(author.length)
            {
                console.log(author[0].roll)
                one = author[0].roll
                checkAuthor2();
            }
            else
            {
              alert("Author1 id not found.Please check again")
            }
        })
  }

  
  const checkAuthor2= (event)=>
  {
      console.log("Inside check author 2")
      if(author2_id==="")
      {
         console.log("Yes author2 is null")
         checkAuthor3();
         return ;
      }
      
      Axios.post("http://localhost:3001/checkAuthor",{
            student_id: author2_id,
        }).then((response)=>{
            console.log(response)
            author = response.data
            if(author.length)
            {
              console.log(author[0].roll)
              two = author[0].roll
              checkAuthor3();
            }
            else
            {
              alert("Author2-id not found,Please check again")
            }
        })
  }

  
  const checkAuthor3= (event)=>
  {
      console.log("Inside check author 3")
      if(author3_id==="")
      {
         console.log("Yes author3 is null")
         checkSupervisor1();
         return ;
      }
      
      Axios.post("http://localhost:3001/checkAuthor",{
            student_id: author3_id,
        }).then((response)=>{
            console.log(response)
            author = response.data
            if(author.length)
            {
              console.log(author[0].roll)
              three = author[0].roll
              checkSupervisor1();
            }
            else
            {
              alert("Author3-id not found, Pleae try again")
            }
        })
  }

  const checkSupervisor1 = (event)=>
  {
          
      console.log("Inside check supervisor 1")
      if(supervisor1_id==="")
      {
         console.log("Yes supervisor1 is null")
         alert("Supervisor1-id can't be empty")
         return ;
      }
      
      Axios.post("http://localhost:3001/checkSupervisor",{
            teacher_id: supervisor1_id,
        }).then((response)=>{
            console.log(response)
            supervisor = response.data
            if(supervisor.length)
            {
               checkSupervisor2();
            }
            else
            {
              alert("Supervisor1-id not found, Please try again")
            }
        })
  }

  
  const checkSupervisor2=(event)=>
  {
      console.log("Inside check supervisor 2")
      if(supervisor2_id==="")
      {
         console.log("Yes supervisor2 is null")
         checkSupervisor3();
         return ;
      }
      
      Axios.post("http://localhost:3001/checkSupervisor",{
            teacher_id: supervisor2_id,
        }).then((response)=>{
            console.log(response)
            supervisor = response.data
            if(supervisor.length)
            {
               checkSupervisor3();
            }
            else
            {
              alert("Supervisor2-id not found, Pleae try again")
            }
        })
  }

  
  const checkSupervisor3=(event)=>
  {
      console.log("Inside check supervisor 3")
      if(supervisor3_id==="")
      {
         console.log("Yes supervisor3 is null")
         insertThesis();
         return ;
      }
      
      Axios.post("http://localhost:3001/checkSupervisor",{
            teacher_id: supervisor3_id,
        }).then((response)=>{
            console.log(response)
            supervisor = response.data
            if(supervisor.length)
            {
               insertThesis();
            }
            else
            {
              alert("Supervisor3-id not found, Pleae try again")
            }
        })
  }

  const insertThesis = (event)=>
  {
      console.log("Inside check insertThesis ")
      var temp = Math.floor(Math.random() * 1000);
        if(temp<0)
        {
          temp = temp*-1;
        }      
      generated_id = one+"-"+two+"-"+three+"-"+publication_year+"-"+temp;
      if(type==="Paper")
      {
          generated_id = thesis_id
      }
      console.log(generated_id)
      
      if(thesis_id==="" && type==="Paper")
      {
         console.log("thesis_id can't be empty.")
         return ;
      }
      
      Axios.post("http://localhost:3001/insertThesis",{
            thesis_id: generated_id,
            title: title,
            category: category,
            course_id: course_id,
            type: type,
            PDF: PDF,
            date_of_submission: date_of_submission,
            publication_year: publication_year,
            publication: publication
        }).then((response)=>{
            console.log(response)
            supervisor = response.data
            if(supervisor===true)
            {
               insertAuthor1();
            }
            else
            {
              alert("Problem appeared in inserting thesis.Please try again or contact to admin")
            }
        })
  }

  const insertAuthor1=(event)=>
  {
      console.log("Inside insert author 1")
      Axios.post("http://localhost:3001/insertAuthor",{
            student_id: author1_id,
            thesis_id: generated_id
        }).then((response)=>{
            console.log(response)
            author = response.data
            if(author === true)
            {
               insertAuthor2();
            }
            else
            {
              alert("Problem appeared in inserting author 1.Please try again or contact to admin")
            }
        })
  }

  const insertAuthor2=(event)=>
  {
      console.log("Inside insert author 2")
      if(author2_id==="")
      {
         console.log("Yes author2 is null")
         insertAuthor3();
         return ;
      }
      
      Axios.post("http://localhost:3001/insertAuthor",{
            student_id: author2_id,
            thesis_id: generated_id
        }).then((response)=>{
            console.log(response)
            author = response.data
            if(author=== true)
            {
               insertAuthor3();
            }
            else
            {
              alert("Problem appeared in inserting author2.Please try again or contact to admin")
            }
        })
  }

  const insertAuthor3=(event)=>
  {
      console.log("Inside insert author 3")
      if(author3_id==="")
      {
         console.log("Yes author3 is null")
         insertSupervisor1();
         return ;
      }
      
      Axios.post("http://localhost:3001/insertAuthor",{
            student_id: author3_id,
            thesis_id: generated_id
        }).then((response)=>{
            console.log(response)
            author = response.data
            if(author === true)
            {
               insertSupervisor1();
            }
            else
            {
              alert("Problem appeared in inserting author3.Please try again or contact to admin")
            }
        })
  }

  const insertSupervisor1=(event)=>
  {
      console.log("Inside insert supervisor 1")
      
      Axios.post("http://localhost:3001/insertSupervisor",{
            teacher_id: supervisor1_id,
            thesis_id: generated_id
        }).then((response)=>{
            console.log(response)
            supervisor = response.data
            if(supervisor ===  true)
            {
               insertSupervisor2();
            }
            else
            {
              alert("Problem appeared in inserting supervisor 1.Please try again or contact to admin")
            }
        })
  }

  
  const insertSupervisor2=(event)=>
  {
      console.log("Inside insert supervisor 2")
      if(supervisor2_id==="")
      {
         console.log("Yes supervisor2 is null")
         insertSupervisor3();
         return ;
      }
      Axios.post("http://localhost:3001/insertSupervisor",{
            teacher_id: supervisor2_id,
            thesis_id: generated_id
        }).then((response)=>{
            console.log(response)
            supervisor = response.data
            if(supervisor === true)
            {
               insertSupervisor3();
            }
            else
            {
              alert("Problem appeared in inserting supervisor 2.Please try again or contact to admin")
            }
        })
  }

  const insertSupervisor3=(event)=>
  {
      console.log("Inside insert supervisor 3")
      if(supervisor3_id==="")
      {
         console.log("Yes supervisor3 is null")
         insertKeyword1();
         return ;
      }
      Axios.post("http://localhost:3001/insertSupervisor",{
            teacher_id: supervisor3_id,
            thesis_id: generated_id
        }).then((response)=>{
            console.log(response)
            supervisor = response.data
            if(supervisor === true)
            {
               insertKeyword1();
            }
            else
            {
              alert("Problem appeared in inserting supervisor3.Please try again or contact to admin")
            }
        })
  }

  const insertKeyword1 = (event)=>{
    console.log("Inside insert keyword 1")
      if(keyword1==="")
      {
         console.log("Yes keyword 1 is null")
         insertKeyword2();
         return ;
      }
      Axios.post("http://localhost:3001/insertKeyword",{
            keyword: keyword1,
            thesis_id: generated_id
        }).then((response)=>{
            console.log(response)
            supervisor = response.data
            if(supervisor === true)
            {
               insertKeyword2();
            }
            else
            {
              alert("Problem appeared in inserting keyword 1.Please try again or contact to admin")
            }
        })
  }

  
  const insertKeyword2 = (event)=>{
    console.log("Inside insert keyword 2")
      if(keyword2==="")
      {
         console.log("Yes keyword 2 is null")
         insertKeyword3();
         return ;
      }
      Axios.post("http://localhost:3001/insertKeyword",{
            keyword: keyword2,
            thesis_id: generated_id
        }).then((response)=>{
            console.log(response)
            supervisor = response.data
            if(supervisor === true)
            {
               insertKeyword3();
            }
            else
            {
              alert("Problem appeared in inserting keyword 2.Please try again or contact to admin")
            }
        })
  }

  
  const insertKeyword3 = (event)=>{
    console.log("Inside insert keyword 3")
      if(keyword3==="")
      {
         console.log("Yes keyword 3 is null")
         alert(`Your thesis application was successfully completed.Your thesis_id is ${generated_id}`)
         return ;
      }
      Axios.post("http://localhost:3001/insertKeyword",{
            keyword: keyword3,
            thesis_id: generated_id
        }).then((response)=>{
            console.log(response)
            supervisor = response.data
            if(supervisor === true)
            {
              alert(`Your thesis application was successfully completed.Your thesis_id is ${generated_id}`)
            }
            else
            {
              alert("Problem appeared in inserting keyword 3.Please try again or contact to admin")
            }
        })
  }


  

    return (
        <section>
        <div className="ThesisForm">
            <div className="col-1">
            
              <h2>Upload Thesis</h2>
            <span>Add information and save your thesis</span>

              
          
            <form class="row g-3 my-5" id="formThesis" on onSubmit={handleSubmit(onSubmit)}>
            <div class="col-auto">

                
    <input type="text" class="form-control" placeholder="Thesis-id" onChange={(event)=> {
                    setThesis_id(event.target.value)
                }}/>
  </div>
  <div class="col-auto">
  <input type="text" class="form-control" placeholder="Category" onChange={(event)=> {
                    setCategory(event.target.value)
                }}/>
  </div>
  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Course-id" onChange={(event)=> {
                    setCourse_id(event.target.value)
                }}/>
  </div>

  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Author1-id" onChange={(event)=> {
                    setAuthor1_id(event.target.value)
                }}/>
  </div>
  <div class="col-auto">
  <input type="text" class="form-control" placeholder="Author2-id" onChange={(event)=> {
                    setAuthor2_id(event.target.value)
                }}/>
  </div>
  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Author3-id" onChange={(event)=> {
                    setAuthor3_id(event.target.value)
                }}/>
  </div>

  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Supervisor1-id" onChange={(event)=> {
                    setSupervisor1_id(event.target.value)
                }}/>
  </div>
  <div class="col-auto">
  <input type="text" class="form-control" placeholder="Supervisor2-id" onChange={(event)=> {
                    setSupervisor2_id(event.target.value)
                }}/>
  </div>
  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Supervisor3-id" onChange={(event)=> {
                    setSupervisor3_id(event.target.value)
                }}/>
  </div>
  <div class="col-12">
    <input type="text" class="form-control my-2"  placeholder="Title" onChange={(event)=> {
                    setTitle(event.target.value)
                }}/>
  </div>
  <div class="col-12">
    <input type="text" class="form-control"  placeholder="Upload pdf link" onChange={(event)=> {
                    setPDF(event.target.value)
                }}/>
  </div>
  <div class="col-auto">
    <input type="number" class="form-control my-2" placeholder="Publication Year" onChange={(event)=> {
                    setPublication_year(event.target.value)
                }}/>
  </div>
  <div class="col-auto">
  

    <input type="date" class="form-control my-2" placeholder="Date of Submission" onChange={(event)=> {
                    setDate_of_submission(event.target.value)
                }}/>
  </div>
  <div class="col-md-6">
    <input type="text" class="form-control my-2" placeholder="Type" onChange={(event)=> {
                    setType(event.target.value)
                }}/>
  </div>
  <div class="col-md-6">
    <input type="text" class="form-control my-2" placeholder="Publication" onChange={(event)=> {
                    setPublication(event.target.value)
                }}/>
  </div>

  

 

  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Keywords" onChange={(event)=> {
                    setKeyword1(event.target.value)
                }}/>
  </div>
  <div class="col-auto">
  <input type="text" class="form-control" placeholder="Keywords" onChange={(event)=> {
                    setKeyword2(event.target.value)
                }}/>
  </div>
  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Keywords" onChange={(event)=> {
                    setKeyword3(event.target.value)
                }}/>
  </div>
  
  
 
  <div class="col-12">
    <button type="submit" className="btn btn-primary" onClick={checkAuthor1}>Upload</button>
  </div>
</form>



            </div>
            

            </div>

          
        
    </section>
    )
  
}
