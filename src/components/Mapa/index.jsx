import './style.css'

function Mapa(){
    return (
        <div className='mapa'>
            <div className='seta'></div>
            <iframe src="https://www.google.com/maps/embed?pb=!4v1694187607327!6m8!1m7!1sfp2VQWRzZpBaI4pqBKt1gg!2m2!1d-22.85667095825549!2d-43.3297968143314!3f315.68!4f0!5f0.7820865974627469" width="100%" height="100%" loading="lazy"/>
        </div>
    )
}

export default Mapa;