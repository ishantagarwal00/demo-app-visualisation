import React, { useState, useEffect } from "react";
import "./NodeConfiguration.css";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { toggleFormState } from "../../store/store.js";

const GET_FORM_CONFIGURATION = gql`
  query GetFormConfiguration($nodeId: Int) {
    formconfiguration(nodeId: $nodeId) {
      heading
      subheading
      fields {
        label
        type
        placeholder
      }
    }
  }
`;

const GET_FORM_DATA = gql`
  query GetFormData($nodeId: Int) {
    formData(nodeId: $nodeId) {
      nodeId
      data {
        key
        value
      }
    }
  }
`;

const SUBMIT_FORM_DATA = gql`
  mutation SubmitFormData($input: FormDataInput!) {
    submitData(input: $input)
  }
`;

const NodeConfiguration = () => {
  const dispatch = useDispatch();
  const selectedNodeId = useSelector((state) => state.canvas.selectedNodeId);
  const formState = useSelector((state) => state.canvas.formState);

  const nodeIdInt = parseInt(selectedNodeId, 10);
  const {
    loading: configLoading,
    error: configError,
    data: configData,
    refetch: refetchConfiguration,
  } = useQuery(GET_FORM_CONFIGURATION, {
    variables: { nodeId: nodeIdInt },
  });
  const {
    loading: formLoading,
    error: formError,
    data: formData,
    refetch: refetchFormData,
  } = useQuery(GET_FORM_DATA, {
    variables: { nodeId: nodeIdInt },
    skip: !nodeIdInt,
  });

  const [submitFormData] = useMutation(SUBMIT_FORM_DATA);

  const [formValues, setFormValues] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (formData && formData.formData) {
      const formDataFields = formData.formData.data.reduce(
        (accumulator, field) => {
          return { ...accumulator, [field.key]: field.value };
        },
        {}
      );
      setFormValues(formDataFields);
    }
  }, [formData]);

  if (configLoading || formLoading) return "Loading...";
  if (configError) return <pre>{configError.message}</pre>;

  if (formError) {
    return <div>Error in retrieving form data</div>;
  }

  const heading = configData.formconfiguration.heading;
  const subHeading = configData.formconfiguration.subheading;
  const inputDetails = configData.formconfiguration.fields;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      nodeId: nodeIdInt,
      data: Object.entries(formValues).map(([key, value]) => ({
        key,
        value: String(value),
      })),
    };

    submitFormData({
      variables: {
        input: formData,
      },
    })
      .then(() => {
        setIsSubmitted(true);
        setShowPopup(true);
        setFormValues({});
        refetchFormData();
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file") {
      const file = files[0];
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: file,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <div className="configuration-container">
        <div className="heading-wrapper">
          <div>{heading}</div>
          <button
            className="close-form-button"
            onClick={() => dispatch(toggleFormState())}
          >
            ✖
          </button>
        </div>
        <div className="input-form-section">
          <div className="sub-heading-wrapper">{subHeading}</div>
          <div className="input-container">
            {inputDetails.map((item, index) => (
              <div className="input-wrapper" key={index}>
                <div className="label-tag">{item.label}</div>
                <div className="input-tag">
                  {item.type === "file" ? (
                    <input
                      type={item.type}
                      name={item.label}
                      placeholder={item.placeholder}
                      onChange={handleInputChange}
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  ) : (
                    <input
                      type={item.type}
                      name={item.label}
                      placeholder={item.placeholder}
                      value={formValues[item.label] || ""}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="action-button-wrapper">
            <div>
              <button
                className="button cancel-button"
                onClick={() => dispatch(toggleFormState())}
              >
                CANCEL
              </button>
            </div>
            <div>
              <button className="button save-button" onClick={handleFormSubmit}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NodeConfiguration;
