
export const AnimeCard = ({ title, img, score, recommendation}) => {
    return (
        <>
        <div class="card" >
            <img class="card-img-top" src={img}></img>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Score: {score}</li>
                    <li class="list-group-item">Recomendación: {recommendation}</li>
                </ul>
        </div>
        </>
    )
}
