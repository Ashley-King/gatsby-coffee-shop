import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'


export default function Info() {
  return (
    <section className='py-5 '>
      <div className="container">
      <Title title='our story'/>
       <div className="row">
       <div className="col-10 col-sm-8 mx-auto text-center">
        <p className="lead text-muted mb-5">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum optio laboriosam commodi quibusdam, in distinctio voluptatum veniam voluptatem consequuntur. Repellendus commodi ipsam nesciunt eius sunt officia? Eligendi sint impedit non sed sunt. Iusto, error enim, asperiores aut consectetur rem ut beatae vitae molestias saepe modi ad! Aliquid, adipisci blanditiis!
        </p>
        <Link to='/about'>
         <button className="btn text-uppercase btn-yellow">About Page</button>
        </Link>
        
       </div>
       </div>
      </div>
    </section>
  )
}
