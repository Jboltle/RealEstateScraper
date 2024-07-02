import cloudinary from 'cloudinary-video-player'
import "cloudinary-video-player/cld-video-player.min.css";

export const videoPlayer = () =>

    {


const videoPlayer = cloudinary.videoPlayer('doc-player', {cloudName: 'contianer'})

        return (

<main className="main">
    <div className="container">


    </div>

</main>
        )
    }