import {useState} from "react";
import "./index.css";

const ContentList = ({content}) => {
  return (
    <div className="CharterList">
      {/* TODO: Display content */}
      {/*{console.info(`Available content: ${content}`)}*/}

      {content.map((item) => {
        return <ContentItem key={item.id} item={item}/>
      })}
    </div>
  );
};

const ContentItem = ({item}) => {
  let [episodes, setEpisodes] = useState(false)
  return (
    <div className="Container" key={item.id}>
      <div className="CharterName"><h2>{item.name}</h2></div>
      <div className="CharterInfo">
        <div className="CharterPhoto"><img src={item.image} alt={item.name}/></div>
        <div className="CommonInfo">
          <div><b>Status: </b>{item.status}</div>
          <div><b>Species: </b>{item.species}</div>
          <div><b>Type: </b>{item.type}</div>
          <div><b>Gender: </b>{item.gender}</div>
          <div><b>Origin name: </b>{item.origin.name}</div>
          <div><b>Location: </b>{item.location.name}</div>
          <div className="EpisodeContainer"><b>Episodes: </b>{episodes ? <Episodes episodes={item.episode}/> :
            <div>
              <button className="ButtonShowEpisodes" onClick={() => setEpisodes(true)}>Show episodes</button>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

const Episodes = ({episodes}) => {
  return (
    <div className="EpisodeList">
      {episodes.map((episode, index) => {
        return <div key={index} className="Episode">
          {episode}
        </div>
      })}
    </div>
  );
};

export default ContentList;
