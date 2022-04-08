interface IOfferingTileProps {
    title: string
    imgSrc: string
    description: string
    buttonMessage: string
    buttonHref: string
}

function OfferingTile(props: IOfferingTileProps): JSX.Element{
    
    const {title, description, buttonMessage, buttonHref, imgSrc} = props;
    
    return  <div className="card" style={{width: "18rem;"}}>
                <img className="card-img-left" src={imgSrc} alt={`${title} img`} height={500}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={buttonHref} className="btn btn-primary">{buttonMessage}</a>
                </div>
            </div>
}

export default OfferingTile;