export function Card(props){


    return(
        <div className="cards">

            <div className="pic">
                <img src={props.img} alt="#" />
            </div>
            <div className="abt">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>{props.date}</p>
            <p><strong>${props.price}</strong> / night</p>
            <p><strong>{props.location}</strong></p>

            </div>
            
        </div>
    )


}