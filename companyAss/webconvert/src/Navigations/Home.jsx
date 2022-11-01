import React from 'react'
import Home1 from '../imges/thomas.jpg'
const Home = () => {
  return (
    <>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className='box'>
                            <img src={Home1}  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
