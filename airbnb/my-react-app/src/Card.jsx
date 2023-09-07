export function Card(props){

    console.log(props)
    let bagetext;
    if(props.bage==='sold out'){
        bagetext='sold out'
    }
    if(props.bage==='online'){
        bagetext='online'
    }

    return(
      

        <div className="card">

            <div className="sub-card">
                {props.bage && <div className="bage-content">{bagetext}</div> }

                <img src={props.img} alt="#" />
                <div className="name-rating">
                    <p><strong>{props.name}</strong></p>
                    <div className="rate-img">
                        <p><img className="starimg" src={props.starimg} alt="#" /></p>
                        <p>{props.rating}</p>
                    </div>
                </div>
                <p>{props.distance}</p>
                <p>{props.date}</p>
                <p><strong>${props.price}</strong> / night</p>

            </div>
        

        </div>
     
    )
}