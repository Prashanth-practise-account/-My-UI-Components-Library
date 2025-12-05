📦 UI Components Library
A customizable, reusable, and themeable React UI components library. Built with React and Ant Design, this library provides consistent styling and ready-to-use components to accelerate frontend development.

🚀 Project Overview
The BH Prashanth UI Components Library is designed to help developers quickly build React applications with a consistent look and feel. It includes a variety of components like Buttons, Inputs, Modals, Cards, Checkboxes, Radios, Selects, Multiselects, and Tabs. Each component is highly customizable via props, supports theming, and can be previewed in an interactive Storybook or live demo.
This library enables frontend teams to:
1. Maintain a consistent UI/UX across multiple projects.
2. Reduce repetitive code by reusing pre-built components.
3. Quickly integrate customizable components with minimal setup.
4. Experiment with props in a live demo for faster prototyping.

💼 Business Value
1. Developers and product teams can use this library to:
2. Speed up frontend development cycles.
3. Ensure consistent styling and UX across multiple applications.
4. Easily manage themes and component variants.
5. Reduce manual effort in building common UI elements.

 🧠 Technical Workflow

Each component is designed to be highly reusable and customizable via props. The workflow of using the library is as follows:
1.Install the library from NPM.
2.Import the required components in your React project.
3.Pass props to configure size, style, theme, and behavior.
4.Preview and test components in Storybook or the live demo  .
5.Deploy your app with the integrated components.

🛠️ Tech Stack
1.React – For building components and UI.
2.Ant Design – For consistent styling foundation.
3.React Storybook – For interactive component documentation and testing.
4.NPM – For publishing and sharing components.
5.Netlify – For live demo deployment.

📦 Project Structure
.
├── .storybook/          # Storybook configuration
├── public/              # Static files for Storybook/demo
├── src/                 # Source code for components
│   ├── components/      # All UI components (Button, Input, Modal, etc.)
│   └── index.js         # Exports all components
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js       # Vite configuration



🖥️ How to Run Locally
1.Clone the repository:   
    git clone https://github.com/Prashanth-practise-account/-My-UI-Components-Library
    cd ui-library
2. npm install
3.npm run storybook

🧪 How to Use
1.Install the library in your project:
     npm install @bhprashanth/ui-library
2.Import the required component:
    import { Button, Input, Modal } from "@bhprashanth/ui-library";
3. Use it in your React app:
    <Button variant="primary" size="large" onClick={() => alert("Clicked!")}>
  Click Me
</Button>

<Input
  type="text"
  placeholder="Enter your name"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
4. Preview all components and props in the Live Dem:  https://6885dbb47e9316bd6520d31e--iridescent-mousse-252c4c.netlify.app/?path=/docs/configure-your-project--docs 

💡 Customization Ideas and Future Enhancements
  1. Additional Themes – Dark mode and custom color palettes.
  2. Advanced Components – DatePicker, Carousel, Notifications.
  3. TypeScript Support – Stronger type checking and auto-completion.
  4. Automated NPM Releases – CI/CD pipeline for versioning and publishing.

🧑‍💻 Author
Prashanth B H
Frontend & React Developer
GitHub:https://github.com/
NPM Package:  https://www.npmjs.com/package/@bhprashanth/ui-library
For collaboration or queries: bhprashanth@gmail.com
