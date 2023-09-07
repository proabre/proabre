import arbnblogo from '../src/images/airbnb-logo-new.webp'
import glob from '../src/images/globe.svg'
export function AirBnbHeader(){

    return(
        <>

            <div className="rbnb-header">

                <div className="left">
                   <a href="#"><img  src={arbnblogo} alt="arbnb logo"  style={{width:'80px'}}/></a> 
                </div>
                <nav>
                    <ul>
                        <li className="rnbn-nav"><a href="#">Airbnb your home</a></li>
                        <li className="rnbn-nav"><a href="#"><img src={glob} alt="globeicon" /></a></li>
                        <li className="rnbn-nav"><a href="#">sign up <span style={{color:'green'}}>log in</span></a></li>
                    </ul>
                </nav>
            </div>
           
         
        </>
    )
}