import Header from "./sections/Header"

import data from './data/data.json'
import MainSites from "./sections/MainSites"
import Technology from "./sections/Technology"
import SubSites from "./sections/SubSites"

function App() {

  return (
    <>
      <Header themes={data.themes}/>
      <main>
        <Technology tech={data.tech}/>
        <MainSites sites={data.mainSites}/>
        <SubSites sites={data.subSites} sitesMain={data.sites} tech={data.tech}/>
      </main>
    </>
  )
}

export default App
