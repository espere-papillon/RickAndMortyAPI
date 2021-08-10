import { useCallback, useState } from "react";
import { animateScroll } from "react-scroll";
import Button from "../Button";
import "./index.css";

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const onSearchChange = useCallback((e) => setValue(e.target.value), []);
  const onSubmit = useCallback(() => {
    onSearch(value)
    animateScroll.scrollToTop();
  }, [value, onSearch]);

  const onKeyPressHandler = (e) => {
    if (e.charCode === 13) {
      onSubmit();
    }
  }

  return (
    <div className="SearchInput">
      <input value={value} onChange={onSearchChange} onKeyPress={onKeyPressHandler} />
      <Button onClick={onSubmit} >SUBMIT</Button>
    </div>
  );
};

export default SearchInput;
