import { useEffect, useState } from 'react'
import './App.scss'
import UniversityList from './UniversityList';
import SearchBar from './SearchBar';

function App() {

  const [universities, setUniversities] = useState([]);
  const [errrorMessage, setErrormessage] = useState();
  useEffect(() => {
    fetch('http://universities.hipolabs.com/search?country=Italy')
      .then((response) => response.json())
      .then((objArray) => {
        setUniversities(objArray)
      })
      .catch((error) => {
        console.error(error)
        setErrormessage('Whoops!There was an error!Try reloading the page')
      })
  }, [])
  const uniData = universities.map((obj) => {
    return {
      name: obj.name,
      url: obj.web_pages
    }
  })
  return (
    <section id='container'>
      {errrorMessage !== undefined ?
        <div>{errrorMessage}</div>
        : <div>
          <SearchBar uniData={uniData} updateList={setUniversities} />
          <UniversityList uniData={uniData} />
        </div>}
    </section>
  )
}

export default App


