
function PlayAudio({source}) {

    if(source){
        const play = async () => {
            let audio = new Audio(source)

            try {
                await audio.play();
              } catch (err) {
                console.log('Failed to play...' + err);
                console.log(source);
              }
        }
        return(
            <button onClick={play} className="playbutton">
                <img className="playicon" src="play.png"/>
            </button>
        )
    }
}

export default PlayAudio;