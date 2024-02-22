
export const AnimeCard = ({id, title, img, score, link, recommendation}) => {
    return (
        <>
        <div class="card" >
            <img src={img} class="card-img-top" alt=""></img>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Score: {score}</li>
                    <li class="list-group-item">Recomendación: {recommendation}</li>
                </ul>
                <div class="card-body">
                    <a href={link} class="card-link">Another link</a>
                </div>
        </div>
        </>
    )
}
