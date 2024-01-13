import { useState } from "react";
import "./App.css";

import MainForm from "./components/Form";
import MainCV from "./components/MainCV";
// import { name, updateName } from "./components/Header";

function App() {
  // ----------------------- Header States -----------------------
  const [name, setName] = useState("John Doe");
  const [niche, setNiche] = useState("Web Developer");
  const [email, setEmail] = useState("JoeRogan@gmail.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [address, setAddress] = useState("123 Main Street");

  // ----------------------- Education States -----------------------
  const [school, setSchool] = useState("Squidward Community College");
  const [degree, setDegree] = useState("Bachelor of Science");
  const [gradyear, setGradyear] = useState("2022");
  const [eduLocation, setEduLocation] = useState("Seattle, WA");

  // ----------------------- Skill States -----------------------
  let [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    if (dateString === "Present") {
      return dateString;
    }
    if (dateString === "January, 2022") {
      return dateString;
    }
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[parseInt(month, 10) - 1];
    return `${monthName}, ${year}`;
  };

  // ----------------------- WorkStates -----------------------

  const [jobExperience, setJobExperience] = useState([
    {
      company: "Freelance",
      position: "Web Developer",
      location: "Seattle, WA",
      dateFrom: "January, 2022", // Assuming formatDate is not used or moved elsewhere
      dateTo: "Present",
      responsibilities: [
        "Developed and maintained websites for clients.",
        "Collaborated with cross-functional teams to deliver high-quality web solutions.",
      ],
    },
  ]);

  // ----------------------- Work Handlers -----------------------
  const handleWorkButton = (e, newJobExperience) => {
    e.preventDefault();

    if (typeof newJobExperience.responsibilities === "string") {
      newJobExperience.responsibilities =
        newJobExperience.responsibilities.split(",");
    }

    if (
      jobExperience.length > 0 &&
      jobExperience[0].location === "Seattle, WA"
    ) {
      setJobExperience([newJobExperience]);
    } else {
      setJobExperience([...jobExperience, newJobExperience]);
    }
  };
  const handleWorkDel = (e) => {
    console.log(jobExperience.location);
    e.preventDefault();
    setJobExperience("");
    console.log(jobExperience.length);
  };

  // ----------------------- Skill Handlers -----------------------
  const handleSkillClick = (e, skill) => {
    e.preventDefault();

    setSkills([...skills, skill]);
    if (skills.length > 7) {
      alert("You have reached the max number of skills");
      e.target.style.display = "none";
    }
  };

  const handleSkillDel = (e) => {
    e.preventDefault();
    setSkills(skills.slice(0, -1));
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
        handleWorkButton={handleWorkButton}
        handleSkillDel={handleSkillDel}
        handleWorkDel={handleWorkDel}
      />
      <>
        <MainCV
          {...{
            name,
            niche,
            email,
            phone,
            address,
            school,
            degree,
            gradyear,
            eduLocation,
            skills,
            jobExperience,
            handleSkillClick,
            handleSkillDel,
            formatDate,
          }}
        />
      </>
    </div>
  );
}

export default App;
