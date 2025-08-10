import { useState, useEffect } from "react";
import * as abayaService from "./services/abayaService";
import AbayaList from "./components/AbayaList/AbayaList";
import AbayaForm from "./components/AbayaForm/AbayaForm";
import AbayaDetail from "./components/AbayaDetail/AbayaDetail";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router";
import Custom from "./components/Custom/Custom";
import * as authService from "./services/authService";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";

const App = () => {
  const [abayas, setAbaya] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  //  hook to call the index service function.
  useEffect(() => {
    const fetchAbayas = async () => {
      const fetchedAbaya = await abayaService.index();
      setAbaya(fetchedAbaya);
    };

    fetchAbayas();
  }, []);

  const handleSelect = (abaya) => {
    setSelected(abaya);
    setIsFormOpen(false);
  };
  //ex:  const handleFormView = (pet) => {
  //   if (!pet._id) setSelected(null);
  //   setIsFormOpen(!isFormOpen);
  // };
  const handleFormView = (abaya) => {
    if (!abaya._id) {
      setSelected(null);
    } else {
      setSelected(abaya);
    }
    setIsFormOpen(!isFormOpen);
  };

  //هنا نستدعي create() ونضيف العنصر الجديد
  const handleAddAbaya = async (formData) => {
    const newAbaya = await abayaService.create(formData);
    console.log({ newAbaya });
    // setAbaya([newAbaya, ...abayas]);
    setAbaya((prevAbayas) => [newAbaya, ...prevAbayas]);

    setIsFormOpen(false);
  };

  const handleUpdateAbaya = async (formData, abayaId) => {
    const updatedAbaya = await abayaService.update(formData, abayaId);
    const updatedAbayaList = abayas.map((abaya) =>
      abaya._id !== updatedAbaya._id ? abaya : updatedAbaya
    );
    setAbaya(updatedAbayaList);
    setSelected(updatedAbaya);
    setIsFormOpen(false);
  };

  const handleDeleteAbaya = async (abayaId) => {
    const deletedAbaya = await abayaService.deleteAbaya(abayaId);
    setAbaya(abayas.filter((p) => p._id != abayaId));
    setIsFormOpen(false);
    setSelected(null);
  };

  const [designData, setDesignData] = useState({
    color: "",
    fabric: "",
    accessory: "",
    style: "",
    size: "",
  });

  const [user, setUser] = useState(authService.getUser());

  const handleSignOut = () => {
    authService.signOut();
    setUser(null);
  };

  return (
    <>
      <NavBar user={user} handleSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<h2> Home </h2>} />
        <Route
          path="/Abaya"
          element={
            <AbayaList
              abayas={abayas}
              handleSelect={handleSelect}
              handleFormView={handleFormView}
              isFormOpen={isFormOpen}
            />
          }
        />
        <Route
          path="/abaya/new"
          element={
            <AbayaForm
              handleAddAbaya={handleAddAbaya}
              handleUpdateAbaya={handleUpdateAbaya}
              selected={selected}
              handleDeleteAbaya={handleDeleteAbaya}
            />
          }
        />
        <Route
          path="/abaya/:abayaId/edit"
          element={
            <AbayaForm
              handleAddAbaya={handleAddAbaya}
              handleUpdateAbaya={handleUpdateAbaya}
              selected={selected}
              handleDeleteAbaya={handleDeleteAbaya}
            />
          }
        />
        <Route
          path="/abaya/:abayaId"
          element={
            <AbayaDetail
              selected={selected}
              handleFormView={handleFormView}
              handleDeleteAbaya={handleDeleteAbaya}
            />
          }
        />
        <Route
          path="/custom"
          element={
            <Custom designData={designData} setDesignData={setDesignData} />
          }
        />
        <Route path="/signin" element={<SignInForm setUser={setUser} />} />
        <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
      </Routes>
    </>
  );
};
export default App;
