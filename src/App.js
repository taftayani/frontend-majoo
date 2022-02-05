import logo from "./logo.svg";
import "./App.css";
import Label from "./component/label";

function App({ tes }) {
  return (
    <div className="App">
      {console.log(process.env)}
      <Label classText={"Header"} labelText={"My Task"} />
      <div className="divider" />
      <Label
        classText={"Paragraph"}
        labelText={
          "Hey there, please check your task before you guys doing other"
        }
      />
    </div>
  );
}

export default App;
