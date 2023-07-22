import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Canvas from "../../components/Canvas/Canvas";
import NodeConfiguration from "../../components/NodeConfiguration/NodeConfiguration";

import { toggleFormState, setSelectedNodeId } from "../../store/store.js";
import "./signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const selectedNodeId = useSelector((state) => state.canvas.selectedNodeId);
  const formState = useSelector((state) => state.canvas.formState);

  const handleFormState = () => {
    dispatch(toggleFormState());
  };

  const handleNodeChange = (data) => {
    dispatch(setSelectedNodeId(data));
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
