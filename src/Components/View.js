import React from 'react'
import Header from './Header'

const View = () => {
    var viewlist=[
        {
            "empid":1,
            "empname":"mahesh",
            "des":"manager",
            "sal":"100000",
            "cname":"Hyper",
            "dob":"20/4/1988",
            "email":"mahesh@gmail.com"
        },
        {
            "empid":2,
            "empname":"deepan",
            "des":"Ass.manager",
            "sal":"90000",
            "cname":"Hyper",
            "dob":"10/8/1989",
            "email":"deepan@gmail.com"
        },
        {
            "empid":3,
            "empname":"gopan",
            "des":"Dept.manager",
            "sal":"85000",
            "cname":"Logic",
            "dob":"16/9/1990",
            "email":"gopan@gmail.com"
        },
        {
            "empid":4,
            "empname":"riya",
            "des":"manager",
            "sal":"120000",
            "cname":"HIBM",
            "dob":"27/6/1991",
            "email":"riya@gmail.com"
        },
        {
            "empid":5,
            "empname":"kavya",
            "des":"hr",
            "sal":"50000",
            "cname":"IHD",
            "dob":"1/5/1994",
            "email":"kavya@gmail.com"
        },
        {
            "empid":6,
            "empname":"sreya",
            "des":"manager",
            "sal":"100000",
            "cname":"IHD",
            "dob":"20/8/1987",
            "email":"sreya@gmail.com"
        },
        {
            "empid":7,
            "empname":"gokul",
            "des":"hr",
            "sal":"60000",
            "cname":"HIBM",
            "dob":"22/4/1990",
            "email":"gokul@gmail.com"
        },
        {
            "empid":8,
            "empname":"roy",
            "des":"hr",
            "sal":"50000",
            "cname":"Software",
            "dob":"20/4/1988",
            "email":"roy@gmail.com"
        }

    ]
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row ">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <table class="table">
  <thead>
    <tr>
      <th scope="col">EMPLYEE ID</th>
      <th scope="col">NAME</th>
      <th scope="col">DESIGNATION</th>
      <th scope="col">SALARY</th>
      <th scope="col">COMPANY NAME</th>
      <th scope="col">DOB</th>
      <th scope="col">EMAIL</th>
    </tr>
  </thead>
  <tbody>
  {viewlist.map((value,key)=>
                    {
                        return<tr>
    
      
      <td>{value.empid}</td>
      <td>{value.empname}</td>
      <td>{value.des}</td>
      <td>{value.sal}</td>
      <td>{value.cname}</td>
      <td>{value.dob}</td>
      <td>{value.email}</td>
    </tr>
       })}
                    
    
  </tbody>
</table>

  




</div>
                 

    </div>
    </div>
    </div></div>
    </div>
  )
}

export default View