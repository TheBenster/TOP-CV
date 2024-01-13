import Header from "./Header";
import Edu from "./Edu";
import Skill from "./Skill";
import Work from "./Work";

const MainCV = ({
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
}) => {
  return (
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
      <Skill
        skills={skills}
        handleSkillDel={handleSkillDel}
        handleSkillClick={handleSkillClick}
      />
      <hr id="divider" />
      <Work jobExperience={jobExperience} formatDate={formatDate} />
    </div>
  );
};

export default MainCV;
