import Header from "./Header";
import ContentList from "./ContentList";
import {useFetchContent} from "../hooks/useFetchContent";
import "./App.css";
import Button from "./Button";
import {useCallback} from "react";

const App = () => {
  const [fetch, fetchMore, content, loading, error] = useFetchContent();
  const onSubmit = useCallback(() => fetchMore(content), [content, fetchMore]);

  return (
    <div className="App">
      <Header onSearch={fetch}/>
      <div>
        <h1>Simple content list</h1>
        <ContentList content={content}/>
        {/* TODO: Put FetchMoreButton component here */}
        {error && <h3 className="Error">{error}</h3>}
        {content.length !== 0 && <div className="ButtonNext"><Button disabled={error || loading}
                                                                     onClick={onSubmit}>NEXT</Button></div>}
      </div>

    </div>
  );
};

export default App;
