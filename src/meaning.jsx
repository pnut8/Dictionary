
function Meaning({data}) {
    return(
        <>
        {data?.map((item, index) => {
        const defLength = item?.definitions.length;
        const len = defLength > 3 ? 3 : defLength;
        const synonLength = item?.synonyms.length;
        const synonlen = synonLength > 4 ? 4 : synonLength;
        
        return (
        <div key={index} className="pos-container">
        <h4 className="ps"><span>{item?.partOfSpeech}</span></h4>
        <p className="meaning">Meaning</p>
        <ul>
        {item?.definitions.slice(0, len).map((item)=>{
          return(
          <li className="list" key={item.definition}>{item?.definition}</li>
          )
        })
        }
        </ul>
        <div className="synonym">
        {item?.synonyms.length > 0 && <p className="synon-p1">Synonyms</p>}
        {item?.synonyms.slice(0, synonlen).map((item, index) => {
          return(
            <p className="synon-p2" key={index}>{item}</p>
          )
        })}
        </div>
        </div>
      )
      })}
      </>
      )
}

export default Meaning;