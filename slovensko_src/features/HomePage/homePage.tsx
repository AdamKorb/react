import './homePage.css'
import data from '../_shared/data'
import { useState, useEffect  } from "react";

const homePage = () => {
    const [searchingText, setSearchingText] = useState('');
    const [filteredData, setFilteredData] = useState<{ id: number; title: string; tags: string; price: string; tax: string; }[]>([])


  useEffect( () => {
    const dataAfterFilter = data.filter( (oneFunction) => {
        return oneFunction.title.toLowerCase().includes(searchingText.toLowerCase())
    })
    setFilteredData(dataAfterFilter)
  }, [searchingText])

    

    return <div>
    <form className='search-bar'>
      <input type="text" placeholder="čo za teba vybavíme?" onChange={
        (e) => setSearchingText(e.target.value)
      }/>
    </form>
    <div>
      {filteredData.map( (oneFunction) => {
        const {id,title,tags, price, tax } = oneFunction


        return <div className='one-function' key={id}>
            <h2>{title}</h2>
            <p>{tags}</p>
            <p>{price}</p>
            <p>{tax}</p>
        </div>
      } )}
    </div>


  </div>
}

export default homePage
