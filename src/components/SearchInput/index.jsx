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

  return (
    <div className="SearchInput">
      <input value={value} onChange={onSearchChange} />
      <Button onClick={onSubmit}>SUBMIT</Button>
    </div>
  );
};

export default SearchInput;
