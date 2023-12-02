import { useState } from "react";
import "./App.css";

import MainForm from "./components/Form";
import Header from "./components/Header";
// import { name, updateName } from "./components/Header";

function App() {
  const [name, setName] = useState("John Doe");
  const [niche, setNiche] = useState("Web Developer");
  const [email, setEmail] = useState("JoeRogan@gmail.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [address, setAddress] = useState("123 Main Street");
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setName("");
  //   };
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateNiche = (e) => {
    setNiche(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePhone = (e) => {
    setPhone(e.target.value);
  };
  const updateAddress = (e) => {
    setAddress(e.target.value);
  };
  return (
    <div className="App">
      <MainForm
        updateName={updateName}
        updateNiche={updateNiche}
        updateEmail={updateEmail}
        updatePhone={updatePhone}
        updateAddress={updateAddress}
      />
      <Header
        name={name}
        niche={niche}
        email={email}
        phone={phone}
        address={address}
      />
    </div>
  );
}

export default App;
