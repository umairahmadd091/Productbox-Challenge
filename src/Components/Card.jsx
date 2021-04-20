import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../App.css";

function Card(props) {
    return (
        <>
            <div className="card mx-auto my-3">
                <img className="card-img-top img-fluid cardImg" src={props.img} alt="Card image" />
                <div className="card-body text-center">
                    <h4 className="card-title">{props.name}</h4>
                    <h5 className="card-text">Price: <span className="text-primary">{props.price}</span></h5>
                    <button className="btn btn-success" onClick={props.click}>Add to Cart</button>
                </div>
                <button className="btn btn-primary my-2" onClick={props.update}>Update</button>
                <button className="btn btn-danger" onClick={props.delete}>Delete</button>
            </div>
        </>
    );
}

export default Card;
