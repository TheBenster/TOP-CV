import HeaderForm from "./HeaderForm";
import EduForm from "./EduForm";
import SkillForm from "./SkillForm";
import WorkForm from "./WorkForm";
import propTypes from "prop-types";

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
  work,
  handleWorkButton,
  handleSkillDel,
  handleWorkDel,
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
      <SkillForm
        handleSkillDel={handleSkillDel}
        skill={skill}
        handleSkillClick={handleSkillClick}
      />
      <WorkForm
        work={work}
        handleWorkDel={handleWorkDel}
        handleWorkButton={handleWorkButton}
      />
    </div>
  );
}

MainForm.propTypes = {
  updateName: propTypes.func,
  updateNiche: propTypes.func,
  updateEmail: propTypes.func,
  updatePhone: propTypes.func,
  updateAddress: propTypes.func,
  updateSchool: propTypes.func,
  updateDegree: propTypes.func,
  updateGradyear: propTypes.func,
  updateEduLocation: propTypes.func,
  handleSkillClick: propTypes.func,
  handleWorkButton: propTypes.func,
  handleSkillDel: propTypes.func,
  skill: propTypes.array,
  addWork: propTypes.func,
  work: propTypes.object,
  handleWorkDel: propTypes.func,
};
export default MainForm;
