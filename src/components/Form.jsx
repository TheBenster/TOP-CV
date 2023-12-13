import HeaderForm from "./HeaderForm";
import EduForm from "./EduForm";
import SkillForm from "./SkillForm";
import WorkForm from "./WorkForm";

function MainForm({
  updateName,
  updateNiche,
  updateEmail,
  updatePhone,
  updateAddress,
  updateSchool,
  updateDegree,
  updateGradyear,
  updateEduLocation,
  handleSkillClick,
  skill,
}) {
  return (
    <div className="main-form">
      <HeaderForm
        updateName={updateName}
        updateNiche={updateNiche}
        updateEmail={updateEmail}
        updatePhone={updatePhone}
        updateAddress={updateAddress}
      />
      <EduForm
        updateSchool={updateSchool}
        updateDegree={updateDegree}
        updateGradyear={updateGradyear}
        updateEduLocation={updateEduLocation}
      />
      <SkillForm skill={skill} handleSkillClick={handleSkillClick} />
      <WorkForm />
    </div>
  );
}

export default MainForm;
