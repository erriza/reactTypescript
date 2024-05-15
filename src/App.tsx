import { useEffect, useState } from 'react'
import './App.css'
import { getAllDiaries } from './services/diariesService';
import Diaries from './components/Diaries';
import {Diaire, OnAddDiarie} from './../types'
import DiaireForm from './components/DiarieForm';

function App() {
  const [diaries, setDiaries] = useState<Diaire[]>([]);

  useEffect(() => {
    getAllDiaries().then(data => 
      setDiaries(data));
  },[])

  const onAddDiarie: OnAddDiarie = (newDiarie : Diaire) => {
    setDiaries([...diaries, newDiarie])
  }
  return (
    <>
      <DiaireForm onAddDiarie={onAddDiarie}/>
      <Diaries diaires={diaries}/>
    </>
  )
}

export default App
