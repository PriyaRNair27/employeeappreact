import React, { useState } from 'react'

const Addemp = () => {
    var [id,setid]=useState("")
    var [name,setname]=useState("")
    var [des,setdes]=useState("")
    var [sal,setsal]=useState("")
    var [cname,setcname]=useState("")
    var [dob,setdob]=useState("")
    var [em,setem]=useState("")
    const subdata=()=>{
        const data={"id":id,"name":name,"des":des,"sal":sal,"cname":cname,"dob":dob,"em":em}
        console.log(data)
    }
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="for">Employee Id</label>
                    <input onChange={(a)=>{setid(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="for">Employee name</label>
                    <input  onChange={(a)=>{setname(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="for">Designation</label>
                    <input onChange={(a)=>{setdes(a.target.value)}}  type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="for">Salary</label>
                    <input onChange={(a)=>{setsal(a.target.value)}}  type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">Company Name</label>
                    <input onChange={(a)=>{setcname(a.target.value)}}  type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="for">Date Of Birth</label>
                   <input onChange={(a)=>{setdob(a.target.value)}}  type="date" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="for">email</label>
                   <input  onChange={(a)=>{setem(a.target.value)}} type="email" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button  onClick={subdata}className="btn btn-success">CLEAR</button>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subdata} className="btn btn-danger">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Addemp