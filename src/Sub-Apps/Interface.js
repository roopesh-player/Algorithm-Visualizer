import React from 'react'
import { Link } from 'react-router-dom'
import SortingImage from './sorting.jpg'

const Interface = () => {
  return (
    <div style={{height:"100vh",background:"black"}}>
    <h1 className='text-center text-info p-4'>Algorithm Visualizer</h1>
    <div className='d-flex justify-content-center'>
      <div className="card rounded-0"  style={{width: '18rem',margin:'auto'}}>
        <img src={SortingImage} className="card-img-top" alt="..."/>
        <div className="card-body p-0">
            {/* <h5 className="card-title">Sorting Algorithms</h5> */}
            <Link className='btn btn-info rounded-0 fs-3' style={{width:'100%',height:'100%'}} to="/sorting">Sorting Algorithms</Link>
        </div>
      </div>
      <div className="card rounded-0"  style={{width: '18rem',margin:'auto'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQbkxrU9-Plc6SbG7dX53xJkDn76Tm5b4wA&usqp=CAU" style={{height:"11rem"}} className="card-img-top" alt="..."/>
        <div className="card-body p-0">
            {/* <h5 className="card-title">Card title</h5> */}
            <Link className='btn btn-info rounded-0 fs-4' style={{width:'100%',height:'100%'}} to="/sieve">Sieve of Eratosthenes</Link>
        </div>
      </div>
      <div className="card rounded-0"  style={{width: '18rem',margin:'auto'}}>
        <img src="https://cdn.programiz.com/sites/tutorial2program/files/binary-search-mid.png" style={{height:"11rem"}} className="card-img-top" alt="..."/>
        <div className="card-body p-0">
            {/* <h5 className="card-title">Card title</h5> */}
            <Link className='btn btn-info rounded-0 fs-4' style={{width:'100%',height:'100%'}} to="/binarysearch">Binary Search</Link>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Interface
