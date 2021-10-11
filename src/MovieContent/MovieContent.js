import React from 'react'
import './MovieContent.css'

const MovieContent = () => {

    return (

        <div className="d-flex align-items-center justify-content-space-around p-4">

            <section className="Picture">
            <img src="https://cdn11.bigcommerce.com/s-etaxb7aidf/images/stencil/1280x1280/products/3105/6834/DP4524-Bleach-2-__76114.1588885684.jpg?c=1" alt =""/>
            </section>

            <section className="p-4">
             <section className='Head'>
             <h2>Title</h2>
             <p>(6.5K)</p>
             <i class="fas fa-star"></i>
             <h4>8</h4>
             <h6>/10</h6>
             </section>
             <p>Description</p>
             <h5>Date of release</h5>

             <section className='Type'>
                 <h6>Action</h6>
                 <h6>Adventure</h6>
             </section>

             <section className="Actors">
                  <h4>Actors</h4>
                  <h6>First Actor</h6>
                  <hr/>
                  <h6>Second Actor</h6>
                  <hr/>
                  <h6>Third Actor</h6>
             </section>

            </section>
            
        </div>
    )
}

export default MovieContent
