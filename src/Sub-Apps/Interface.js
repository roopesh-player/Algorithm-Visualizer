import React from 'react'
import { Link } from 'react-router-dom'

const Interface = () => {
  return (
    <div>
      <div className="card"  style={{width: '18rem'}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <Link className='btn btn-primary' to="/sorting">Sorting Algorithms</Link>
        </div>
      </div>
      <div className="card"  style={{width: '18rem'}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <Link className='btn btn-primary' to="/sieve">Sieve of Eratosthenes</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Interface
