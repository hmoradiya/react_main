import { useState, useEffect } from 'react';
import './App.css'
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {

  const [monster, setMonster] = useState([]);
  const [search, setSearch] = useState("");
  const [filterMonster, setFilterMonster] = useState([]);

  const getMonsterData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users').then((users) => users.json()).then((users) => {
      setMonster(users)
      setFilterMonster(users)
    })
  }

  useEffect(() => {
    getMonsterData();
  }, [])

  function searchInput(e) {
    console.log(e.target.value)
    setSearch(e.target.value)
    const filterMonster = monster.filter((user) => {
      return user.name.toLocaleLowerCase().includes(e.target.value)
    })
    setFilterMonster(filterMonster)
  }
  

  return (
    <div className="App">
      <SearchBox search={search} searchInput={searchInput}/>
      <CardList filterMonster={filterMonster}/>
    </div>
  );
}

export default App;
