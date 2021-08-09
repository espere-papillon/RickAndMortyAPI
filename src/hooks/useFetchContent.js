import {useCallback, useRef, useState} from "react";

export const useFetchContent = () => {
  const [imgList, setImgList] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [paramsSearch, setParamsSearch] = useState({searchValue: "", page: 1});
  let paramsSelection10 = useRef(true)

  const request = async (value, page, array, param = true) => {
    setLoading(true)
    try {
      if (param) {
        const res = await api.getCharacters(value, page)
        const json = await res.json()
        if (json.results) {
          setResult(json.results)
          if (json.results.length > 10) {
            setImgList([...array, ...(json.results.slice(0, 10))])
          } else {
            setImgList([...array, ...json.results])
          }
          paramsSelection10.current = false
        } else {
          setError(json.error)
        }
      } else {
        setImgList([...array, ...(result.slice(10, 20))])
        paramsSelection10.current = true
      }
    } catch (e) {
      setError(e)
    }
    setLoading(false)
  }

  const fetchFunction = useCallback(async (value) => {
    setError("")
    setParamsSearch({...paramsSearch, searchValue: value, page: 1})
    await request(value, 1, [])
  }, [paramsSearch, result]);

  // TODO: Put fetchMore method here
  const fetchMore = useCallback(async (imgList) => {
    const page = paramsSelection10.current ? paramsSearch.page + 1 : paramsSearch.page
    setParamsSearch({...paramsSearch, page: page})
    await request(paramsSearch.searchValue, page, imgList, paramsSelection10.current)
  }, [paramsSearch, result, imgList]);
  return [fetchFunction, fetchMore, imgList, loading, error];
};

const api = {
  getCharacters(value = "", page = 1) {
    return fetch(`https://rickandmortyapi.com/api/character/?name=${value}&page=${page}`)
  }
}