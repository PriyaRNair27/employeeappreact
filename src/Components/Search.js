import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    var [id,setid]=useState("")
    const subdata=()=>{
        const data={"id":id}
        console.log(data)
    }
  return (
    <div>
        <Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">Employee Id</label>
                    <input onChange={(a)=>{setid(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subdata} className="btn btn-danger">SEARCH</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Search