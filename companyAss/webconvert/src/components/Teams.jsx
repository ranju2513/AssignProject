import Team1 from '../imges/wight.jpg'
import Team2 from '../imges/karsten.jpg'
import Team3 from '../imges/ana.jpg'

export default function Teams(){
    return(
        <>
            <section>
                <div className="teams container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="box">
                                <img src={Team1} className="img-fluid" alt="" />
                            </div>
                            <div className='content'> 
                            <h6>Easy Gym Team</h6>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="box">
                                <img src={Team2} className="img-fluid" alt="" />
                            </div>
                            <div className='content'> 
                            <h6>Easy Gym Team</h6>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="box">
                                <img src={Team3} className="img-fluid" alt="" />
                            </div>
                            <div className='content'> 
                            <h6>Easy Gym Team</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}