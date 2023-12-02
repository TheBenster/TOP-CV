import HeaderForm from "./HeaderForm";
import EduForm from "./EduForm";
import SkillForm from "./SkillForm";
import WorkForm from "./WorkForm";

function MainForm() {
  return (
    <div className="main-form">
      <HeaderForm />
      <EduForm />
      <SkillForm />
      <WorkForm />
    </div>
  );
}

export default MainForm;
