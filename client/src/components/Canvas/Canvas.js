import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import { useDispatch } from "react-redux";
import TriggerIcon from "../../../src/assets/icons/trigger-icon.svg";
import UserIcon from "../../../src/assets/icons/user-icon.svg";
import RedirectIcon from "../../../src/assets/icons/redirect-icon.svg";
import { gql, useQuery } from "@apollo/client";
import { setSelectedNodeId, toggleFormState } from "../../store/store.js";

import "reactflow/dist/style.css";
import "./Canvas.css";

const GET_NODES = gql`
  query {
    blueprint {
      id
      name
    }
  }
`;

const Canvas = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_NODES);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  const handleClick = (e) => {
    const id = e.currentTarget.getAttribute("data-id");
    dispatch(setSelectedNodeId(id));
    dispatch(toggleFormState());
  };

  const customNode = (icon, text, id) => {
    return (
      <>
        <div
          className="custom-node"
          data-id={id}
          onClick={(e) => handleClick(e)}
        >
          <img src={icon} height={24} width={24} />
          <span>{text}</span>
        </div>
      </>
    );
  };

  const initialNodes =
    data &&
    data.blueprint &&
    data.blueprint.map((item, index) => {
      const position = { x: index * 50, y: index * 50 };
      let label;
      switch (item.name) {
        case "HTTP Trigger":
          label = customNode(TriggerIcon, item.name, item.id);
          break;
        case "Signup Page":
          label = customNode(UserIcon, item.name, item.id);
          break;
        case "Redirect User":
          label = customNode(RedirectIcon, item.name, item.id);
          break;
        default:
          label = "";
      }

      return { id: item.id.toString(), position, data: { label } };
    });

  const initialEdges = [];

  const handleEdgeDoubleClick = (event, edge) => {
    const { id } = edge;
    const flowInstance = event.target;
    const edgeElement = flowInstance.getElementById(id);
    edgeElement.hidden = !edgeElement.hidden;
  };

  return (
    <>
      <div className="canvas-conatiner">
        <ReactFlow
          defaultEdges={initialEdges}
          defaultNodes={initialNodes}
          onEdgeDoubleClick={handleEdgeDoubleClick}
          zoom={0.8}
          minZoom={0.2}
        >
          <Background variant="dots" gap={6} size={1} color="#0000FF" />
          <MiniMap
            nodeStrokeColor={(n) => (n.hidden ? "#FF0000" : "#000000")}
          />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
};

export default Canvas;
