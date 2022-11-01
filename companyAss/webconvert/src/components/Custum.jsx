import Custom1 from '../imges/photo@1.jpg'
import Custum2 from '../imges/custum2.jpg'
import Filp from '../imges/filp.jpg'
export default function Custom(){
    return(
        <>
        <section>
            <div className="custom container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={Custom1} className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="box">
                            <img src={Custum2} className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="box">
                            <img src={Filp} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        </>
        
    )
}