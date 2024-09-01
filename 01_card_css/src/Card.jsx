import zdjecie from "./assets/zd.jpeg"

function Card(){
    return(
        <div className="card">
            <img className="card-img"  src={zdjecie} alt="zdjecie ghosta" />
            <h2>Ghost</h2>
            <p>Chce robic filmiki na yt</p>
        </div>
    );
}

export default Card