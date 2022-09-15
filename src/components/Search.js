import React from 'react'

export const Search = (props) => {
    return (
        
    <div className='row'>
        <div className='col-lg-5'>
            <div className='form-group'>
                <label htmlFor="">Type city name</label>
                <input type="text" className="form-control" value={props.city}
                name="city" id='city' onChange={props.change} aria-describedby='helpId'
                placeholder=''></input>
            </div>
        </div>
        <div className='col-lg-1 text-center'>
            <label htmlFor=""></label>
            <h5>or</h5>
        </div>
        <div className='col-lg-5'>
            <div className='form-group'>
                <label htmlFor="" >Get co-ordinate</label>
                <button className='btn fa fa-crosshairs' onClick={props.getLocation} ></button>
                <div className='row'>
                    <div className='bg-dark text-white rounded pt-1 pl-1 pr-1'>Lat:</div>
                    <input type="number" step="any"
                     className='form-control co mr-1' name='lat'  onChange={props.change} value={props.lat} id='lat' 
                     aria-describedby='helpId' placeholder=''></input>
                </div>
                <div className='bg-dark text-white rounded pt-1 pl-1 pr-1'>Lon:</div>
                    <input type="number" step="any"
                     className='form-control co mr-1' name='lon'  onChange={props.change} value={props.lon} id='lon' 
                     aria-describedby='helpId' placeholder=''></input>
                </div>
            </div>
     
        <div className='col-lg-1'>
        <label htmlFor="">Search</label>
        <button className='btn btn-primary fa fa-search'></button>
      </div>
      </div>
     
    )
}
