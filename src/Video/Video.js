import video from './knitting.mp4';
import '../App.css'

export const Video = () => {
    return (
        <div>
            <video autoPlay muted loop width ="500px">
                <source src={video} type = "video/mp4" />
            </video>
        </div>
    )
}