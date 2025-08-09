import React from 'react'
import { useState, useEffect } from 'react'
import * as abayaService from './services/abayaService'
import AbayaList from './components/AbayaList/AbayaList'
import AbayaForm from './components/AbayaForm/AbayaForm'
import AbayaDetail from './components/AbayaDetail/AbayaDetail'


const App = () => {
  const [abayas, setAbaya] = useState([])
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
 
//  hook to call the index service function.
  useEffect(() => {
    const fetchAbayas = async () => {
      const fetchedAbaya = await abayaService.index();
      setAbaya(fetchedAbaya)
    }

    fetchAbayas();
  }, []);
  

  const handleSelect = (abaya) => {
      setSelected(abaya)
      setIsFormOpen(false)
  }
//ex:  const handleFormView = (pet) => {
  //   if (!pet._id) setSelected(null);
  //   setIsFormOpen(!isFormOpen);
  // };
  const handleFormView =(abaya) => {
    if (!abaya._id) {
    setSelected(null);
  } else {
    setSelected(abaya);
  }
    setIsFormOpen (!isFormOpen);
  }

  //هنا نستدعي create() ونضيف العنصر الجديد
  const handleAddAbaya = async (formData) => {
    const newAbaya = await abayaService.create(formData)
    console.log({newAbaya})
    // setAbaya([newAbaya, ...abayas]);
    setAbaya(prevAbayas => [newAbaya, ...prevAbayas]);

    setIsFormOpen(false);
  }

  const handleUpdateAbaya = async (formData, abayaId) => {
    const updatedAbaya = await abayaService.update(formData ,abayaId);
    const updatedAbayaList = abayas.map((abaya)=> (
      abaya._id !== updatedAbaya._id ? abaya : updatedAbaya
    ));
    setAbaya(updatedAbayaList);
    setSelected(updatedAbaya);
    setIsFormOpen(false);

  }


   const handleDeleteAbaya = async (abayaId) =>{
     const deletedAbaya = await abayaService.deleteAbaya(abayaId) ;
     setAbaya(abayas.filter(p=>p._id!=abayaId))
     setIsFormOpen(false)
     setSelected(null)
    }


  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<h2> Home </h2>} />
    <Rout path="/Abaya" element={<AbayaList abayas={abayas} handleSelect={handleSelect} handleFormView={handleFormView} isFormOpen={isFormOpen}/>}/>
    
    {isFormOpen ? (
      <>
      <Route path ="/abaya/new" element={<AbayaForm handleAddAbaya={handleAddAbaya} handleUpdateAbaya={handleUpdateAbaya} selected={selected} handleDeleteAbaya={handleDeleteAbaya}/>}/>
     Add Abaya
      </>

    ): ( <Route path="/abaya/:abayaId" element={<AbayaDetail selected={selected} handleFormView={handleFormView} handleDeleteAbaya={handleDeleteAbaya}/> }/>)}
        
</Routes>
    </>
  )
}
export default App