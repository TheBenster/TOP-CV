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
      <EduForm />
      <SkillForm />
      <WorkForm />
    </div>
  );
}

export default MainForm;
