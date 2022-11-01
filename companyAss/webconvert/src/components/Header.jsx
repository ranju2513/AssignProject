import HeaderImg from '../imges/photo.jpg'
export default function Header(){
    return(
        <>
         <section>
            <div className="header">
                <div>
                    <div className="img">
                        <img src={HeaderImg} alt=""/>
                    </div>
                    <div className='Overlay'></div>
                </div>
                <div className='Content'>
                    <h6>Build Your Fitness World <br/>By Building Your Body </h6>
                    <button className='btn'>Join Now</button>
                 </div>  
            </div>
         </section> 
        </>
    )
}