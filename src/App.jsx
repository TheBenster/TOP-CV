import { useState } from "react";
import "./App.css";

import MainForm from "./components/Form";
import Header from "./components/Header";
import Edu from "./components/Edu";
import Skill from "./components/Skill";
import Work from "./components/Work";
// import { name, updateName } from "./components/Header";

function App() {
  // Header States
  const [name, setName] = useState("John Doe");
  const [niche, setNiche] = useState("Web Developer");
  const [email, setEmail] = useState("JoeRogan@gmail.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [address, setAddress] = useState("123 Main Street");

  // Education States
  const [school, setSchool] = useState("Squidward Community College");
  const [degree, setDegree] = useState("Bachelor of Science");
  const [gradyear, setGradyear] = useState("2022");
  const [eduLocation, setEduLocation] = useState("Seattle, WA");

  // Skill States
  let [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);

  // Work States
  const [work, setWork] = useState({
    company: "Freelance",
    position: "Web Developer",
    location: "Seattle, WA",
    dateFrom: "2021",
    dateTo: "Present",
    responsibilities: [
      "Developed and maintained websites for clients.",
      "Collaborated with cross-functional teams to deliver high-quality web solutions.",
    ],
  });

  const addWork = (e) => {
    e.preventDefault();
    setWork([
      ...work,
      {
        company: "",
        position: "",
        dateFrom: "",
        dateTo: "",
        responsibilities: "",
      },
    ]);
  };

  const handleSkillClick = (e, skill) => {
    e.preventDefault();

    setSkills([...skills, skill]);
    if (skills.length > 7) {
      alert("You have reached the max number of skills");
      e.target.style.display = "none";
    }
  };

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

  const updateSchool = (e) => {
    setSchool(e.target.value);
  };
  const updateDegree = (e) => {
    setDegree(e.target.value);
  };
  const updateGradyear = (e) => {
    setGradyear(e.target.value);
  };
  const updateEduLocation = (e) => {
    setEduLocation(e.target.value);
  };
  return (
    <div className="App">
      <MainForm
        updateName={updateName}
        updateNiche={updateNiche}
        updateEmail={updateEmail}
        updatePhone={updatePhone}
        updateAddress={updateAddress}
        updateSchool={updateSchool}
        updateDegree={updateDegree}
        updateGradyear={updateGradyear}
        updateEduLocation={updateEduLocation}
        skills={skills}
        handleSkillClick={handleSkillClick}
      />
      <div className="CV">
        <Header
          name={name}
          niche={niche}
          email={email}
          phone={phone}
          address={address}
        />
        <hr id="divider" />
        <Edu
          school={school}
          degree={degree}
          gradyear={gradyear}
          eduLocation={eduLocation}
        />
        <hr id="divider" />
        <Skill skills={skills} handleSkillClick={handleSkillClick} />
        <hr id="divider" />
        <Work work={work} addWork={addWork} />
      </div>
    </div>
  );
}

export default App;
