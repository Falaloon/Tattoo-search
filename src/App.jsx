import { useState } from 'react';
import './App.css'
import AppHeader from './assets/components/AppHeader'
import TattooItem from './assets/components/TattooItem'
import tattoos from './assets/data/tattoos';
import TattooPost from './assets/components/TattooPost';
import AppSearch from './assets/components/AppSearch';

function App() {
  const [selectedTattoo,setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onTattooClick (theTattoo){
    setSelectedTattoo(theTattoo);
  }

  function onTattooClose(){
    setSelectedTattoo(null);
  }

const filteredTattoos = tattoos.filter((tattoo)=>{
    return tattoo.title.includes(searchText);
  });

  const tattooElement = filteredTattoos.map((tattoo, index) =>{
    return <TattooItem key={index} tattoo = {tattoo} onTattooClick={onTattooClick}/>
  });

  let tattooPost = null; 
  if(!!selectedTattoo){
    tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooClose}/>
  }

  return(
    <div className="app">
      <AppHeader/>

      <section className="app-section">
        <div className='app-container'>
          <AppSearch value={searchText} onValueChange={setSearchText}/>
  
          <div className='app-grid'>
            {tattooElement}
          </div> 
        </div>
      </section>
      {tattooPost}
    </div>
  )
}
export default App
