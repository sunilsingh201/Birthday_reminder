import React, { useState } from 'react'
import List from "./Components/List"
import data from "./Components/data"
function App() {
  const [people,setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthday Tody</h3>
        <List people={people}/>
        <button onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App