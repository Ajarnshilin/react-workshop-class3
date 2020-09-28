import React from "react";
import "./styles.css";
import ComponentLayout from "./Components/ComponentLayout";
import Background from "./Components/Background";
import FormInput from "./Components/FormInput";

export default function App() {
  return (
    <div className="App">
      <ComponentLayout title="This is a title">content...</ComponentLayout>

      <Background> Click Me!!! </Background>

      <FormInput />
    </div>
  );
}
