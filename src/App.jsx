import "./App.css";
import Grandpa from "./Components/Grandpa/Grandpa";
// import ReusableForm from "./Components/ReusableForm/ReusableForm";
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleFrom from './Components/SimpleFrom/SimpleFrom'
// import StatefullForm from './Components/StatefullForm/StatefullForm'

function App() {
  // const handleSingUpSubmit = (data) => {
  //   console.log("sign up data", data);
  // };

  // const handleUpdateProfile = (data) => {
  //   console.log("update profile", data);
  // };

  return (
    <>
      <h1>Vite + React</h1>
      <Grandpa></Grandpa>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={"Sign UP"} handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sing UP</h2>
          <p>please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText="Update"
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
