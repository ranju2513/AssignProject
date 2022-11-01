import Details1 from '../imges/thomasbg.png'
export default function Details(){
    return(
        <>
            <div className="container details">
            <div className="row">
                <div className="col-sm-5">
                    <h6>There is No Tomorrow</h6>
                    <p>Lorem Ipsum is simply dummy 
                    text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries?<br></br> but also the leap into electronic typesetting, 
                      remaining essentially unchanged. 
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                      and more recently with desktop
                     publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </p>
                    <button className="btn">View More</button>
                </div>
                <div className="offset-sm-2 col-sm-5">
                    <img src={Details1} alt="" />
                </div>
            </div>
            </div>
        </>
    )
}