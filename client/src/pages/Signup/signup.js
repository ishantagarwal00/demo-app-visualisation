import React, { useState, useMemo } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Canvas from "../../components/Canvas/Canvas";
import NodeConfiguration from "../../components/NodeConfiguration/NodeConfiguration";
import "./signup.css";

const Signup = () => {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [formState, setFormState] = useState(false);

  const handleFormState = () => {
    if (formState) {
      setFormState(false);
    } else {
      setFormState(true);
    }
  };

  const handleNodeChange = (data) => {
    setSelectedNodeId(data);
  };
  const handleClass = useMemo(() => {
    if (formState) {
      return "form-inclusion";
    }
    return "";
  }, [formState]);

  return (
    <>
      <div className={`signup-page-conatiner ${handleClass}`}>
        <Header />
        <Navbar />
        <Canvas
          handleNodeChange={handleNodeChange}
          handleFormState={handleFormState}
        />
        {!!formState && (
          <NodeConfiguration
            selectedNodeId={selectedNodeId}
            handleFormState={handleFormState}
          />
        )}
      </div>
    </>
  );
};

export default Signup;
