import Meaning from "./meaning";
import PlayAudio from "./pronunciation";

function WordInfo({ info }) {

  let audioSource = info?.phonetics?.[0]?.audio;
  if(!audioSource) {
    audioSource = info?.phonetics?.[1]?.audio;
  }

  let phoneticWord = info?.phonetic;
  if(!phoneticWord) {
    phoneticWord = info?.phonetics?.[0]?.text;
    if(!phoneticWord) {
      phoneticWord = info?.phonetics?.[1]?.text;
  }
}
  // console.log(audioSource);

  return (
    <>
    {
    info &&
    <>
    <div className="word">
    <h1>{info?.word}</h1>
    <PlayAudio source={audioSource}/>
    </div>
    <h3>{phoneticWord}</h3>
    <Meaning data={info?.meanings}/>
    <div className="source-div">{info?.sourceUrls?.length > 0 && <p>Source <a href={info?.sourceUrls?.[0]}>{info?.sourceUrls?.[0]}</a> </p>}</div>
    </>
    }
    {
    !info &&
    <h1>Word Not Found!</h1>
    }
    </>
    )
}
  
export default WordInfo




{/* <h4>{info?.meanings[0].partOfSpeech}</h4>
<p>Meaning</p>
<ul>
<li></li>
</ul> */}