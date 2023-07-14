# Graph Visualization Library Evaluation

In this project, I have evaluated several graph visualization libraries to find a suitable one for our SaaS application. Here is a list of the evaluated libraries, their pros and cons, and the reasoning behind our decision.

## Evaluated Libraries

1. **react-d3-graph**

   - Pros:
     - Easy to use and simple API
     - Customizable with a wide range of options
     - Supports force-directed and hierarchical layouts
   - Cons:
     - Limited community support and updates
   - Reasoning: Although react-d3-graph offers good features, the limited community support and infrequent updates made it less preferable compared to other options.

2. **vis.js**

   - Pros:
     - Provides extensive graph visualization options
     - Supports various layouts and customizations
     - Active community and regular updates
   - Cons:
     - Complex API with a learning curve
   - Reasoning: vis.js is a powerful library with many features and strong community support. However, its complex API might not be ideal for a React Redux application that prioritizes simplicity and ease of use.

3. **react-vis-network**

   - Pros:
     - Designed specifically for React applications
     - Component-based approach for creating graph visualizations
     - Decent range of customization options
   - Cons:
     - Limited advanced features compared to other libraries
   - Reasoning: react-vis-network is a suitable choice if you prefer a React-specific library with simpler integration. However, it may lack some advanced features provided by other libraries.

4. **react-flow**
   - Pros:
     - Clean API and easy to use
     - Good community support
     - Integration with React Redux
     - Provides necessary features for our use cases
   - Cons:
     - N/A
   - Reasoning: I selected react-flow as it offers a clean API, good community support, and seamless integration with React Redux. It also provides the required features to cover our use cases.

# Demo App Visualisation Application

Welcome to our demo application! This document will guide you through the setup process and provide instructions for running the project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before getting started, ensure that you have the following software installed on your machine:

- Node.js (version 12 or above)
- npm (Node Package Manager) or yarn

## Installation

1. Clone the repository to your local machine using the following command:

git clone `https://github.com/ishantagarwal00/demo-app-visualisation.git`

2. Install the project dependencies by running the following command in respective directory:

npm install

## Usage

To run the SaaS application, follow these steps:

1. Start the development server:
   npm start

2. Open your web browser and visit `http://localhost:3000` to access the application.

3. Interact with the application and explore its features.
