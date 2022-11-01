export default function Pricing(){
    return(
        <>
            <div className="pricing container">
                <div className="row">
                    <div className="col-sm-4 ">
                        <div className="box">
                            <h6>Basic</h6>
                            <h5>$101</h5>
                            <p>Lorem Ipsum is simply dummy 
                    text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since!</p>
                    <button className="btn">Buy Now</button>
                        </div>
                    </div>

                    <div className="col-sm-4 mid">
                        <div className="box active">
                            <h6>Advance</h6>
                            <h5>$201</h5>
                            <p>Lorem Ipsum is simply dummy 
                    text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since!</p>
                    <button className="btn">Buy Now</button>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="box">
                            <h6>premium</h6>
                            <h5>$301</h5>
                            <p>Lorem Ipsum is simply dummy 
                    text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since!</p>
                    <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}