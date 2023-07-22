// server.js (Express server)

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");

// Mock data for demonstration purposes
const nodes = [
  { id: 1, name: "HTTP Trigger" },
  { id: 2, name: "Signup Page" },
  { id: 3, name: "Redirect User" },
];

const formConfigurations = {
  1: {
    heading: "HTTP Trigger",
    subheading: "Sandbox URL",
    fields: [{ label: "URL", type: "text", placeholder: "url" }],
  },
  2: {
    heading: "Signup Page",
    subheading: "signup page",
    fields: [
      { label: "Page Title", type: "text", placeholder: "page title" },
      { label: "Subheading", type: "text", placeholder: "subheading" },
      {
        label: "Brand Logo",
        type: "file",
        placeholder: "Click to upload",
        accept: "image/png, image/jpeg, image/gif",
      },
      { label: "Email input title", type: "text", placeholder: "input title" },
      {
        label: "Email input placeholder",
        type: "text",
        placeholder: "placeholder text",
      },
      { label: "Submit button text", type: "text", placeholder: "CTA text" },
      { label: "Submit button text", type: "number", placeholder: "CTA text" },
    ],
  },
  3: {
    heading: "Redirect User",
    subheading: "Redirect URL",
    fields: [{ label: "URL", type: "text", placeholder: "https://" }],
  },
};
const formDataStore = new Map();
// Initialize the Express server
const app = express();

// GraphQL schema
const schema = buildSchema(`
input FieldInput {
    label: String
    type: String
    
  }

  type Node {
    id: Int
    name: String
  }

  type FormConfiguration {
    heading: String
    subheading: String
    fields: [Field]
  }

  type Field {
    label: String
    type: String
    placeholder: String
  }
  type FormDataFields {
    nodeId: Int
    data: [FormField]
  }
  type FormField {
    key:String
    value:String
  }

  input FormFieldInput {
    key:String
    value:String
  }

  input FormDataInput {
    nodeId: Int
    data: [FormFieldInput]
  }

  type Query {
    blueprint: [Node]
    formconfiguration(nodeId: Int): FormConfiguration
    formData(nodeId: Int): FormDataFields
  }

  type Mutation {
    submitData(input: FormDataInput): Boolean
  }
`);

// GraphQL resolvers
const root = {
  blueprint: () => nodes,
  formconfiguration: ({ nodeId }) => {
    const formConfig = formConfigurations[nodeId];
    const fields = formConfig.fields.map(({ label, type, placeholder }) => ({
      label,
      type,
      placeholder,
    }));

    return { ...formConfig, fields };
  },
  formData: ({ nodeId }) => {
    if (formDataStore.has(nodeId)) {
      const formData = formDataStore.get(nodeId);
      return { nodeId, data: formData };
    } else {
      return { nodeId, data: [] };
    }
  },
  submitData: (args) => {
    const { input } = args;
    formDataStore.set(input.nodeId, input.data);
    return true;
  },
};

// Endpoint for GraphQL
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL for testing in the browser
  })
);

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
