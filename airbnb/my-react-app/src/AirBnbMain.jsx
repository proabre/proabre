import img1 from '../src/images/img1.webp'
import img2 from '../src/images/image2.jpg'
import img3 from '../src/images/image3.webp'
import img4 from '../src/images/image4.webp'

export function AirBnbMain(){

    return(
            <>
                <div className="images">
                    <img className='pic' src={img1} alt="#" />
                    <img className='pic' src={img2} alt="#" />
                    <img className='pic' src={img3} alt="#" />
                    <img className='pic' src={img4} alt="#" />

                    <img className='pic' src={img1} alt="#" />
                    <img className='pic' src={img2} alt="#" />
                    <img className='pic' src={img3} alt="#" />
                    <img className='pic' src={img4} alt="#" />

                    <img className='pic' src={img1} alt="#" />
                    <img className='pic' src={img2} alt="#" />
                    <img className='pic' src={img3} alt="#" />
                    <img className='pic' src={img4} alt="#" />

                    
                    <img className='pic' src={img1} alt="#" />
                    <img className='pic' src={img2} alt="#" />
                    <img className='pic' src={img3} alt="#" />

                    <h1>online experiences </h1>
                    <p>Airbnb is a popular online marketplace and hospitality service that allows people 
                        to rent out their homes, apartments, 
                        or other accommodations to travelers. It was founded in 2008 and has since grown 
                        into a global platform with millions of listings in over 220 countries.</p>

                    <p>One of the notable aspects of Airbnb is its user-friendly website and mobile app, 
                        which provide a seamless experience for both hosts and guests. The platform utilizes 
                        React Native for its mobile application,
                         allowing for efficient development and deployment across multiple platforms.</p>
                    <p>Airbnb revolutionized the travel industry by offering a unique alternative to traditional hotels. 
                        It provides travelers with a wide range of accommodation options, from budget-friendly rooms to 
                        luxurious villas, 
                        giving them the opportunity to experience local culture and hospitality.</p>
                </div>
            </>
    )
}