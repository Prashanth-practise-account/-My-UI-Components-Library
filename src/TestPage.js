import React, { useContext, useState } from 'react';
import Button from './Component/Button/Button';
import Input from './Component/Input/Input';
import Modal from './Component/Modal/Modal';
import Card from './Component/Card/Card';
import Checkbox from './Component/Checkbox/Checkbox';
import Radio from './Component/Radio/Radio';
import Select from './Component/Select/Select';
import MultiSelect from './Component/MultiSelect/MultiSelect';
import Tabs from './Component/Tabs/Tabs';
import { ThemeContext } from './ThemeContext';
import "./Component/Button/Button.css";

function TestPage() {
  const { theme } = useContext(ThemeContext);
  const themeClass = theme === 'dark' ? 'custom-button dark' : '';
  const [userName, setUserName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [textValue, setTextValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectSingle, setSelectSingle] = useState([]);
  const [selectMultiple, setSelectMultiple] = useState([]);
  const [like, setLike] = useState(false);
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = () => {
    alert(`Name: ${userName}\nFeedback: ${feedback} is submitted!`);
    setIsModalOpen(false);
    setUserName('');
    setFeedback('');
  };
  const toggleLike = () => setLike(!like);
  const handleClick = () => alert('Submit Button Clicked!');
  const handleSend = () => {
    alert(`Phone: ${phone}, Message: ${message} is sent`);
    setPhone('');     
    setMessage('');   
  };
  return (
    <div style={{
      maxWidth: '800px',
      margin: 'auto',
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>🌟 React UI Component Showcase</h1>

      {/* Card */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Card</h2>
        <Card
          image="https://picsum.photos/350/180"
          title="Prashanth B H"
          subtitle="Frontend Developer"
          content={
            <>
              <p>This is a beautifully crafted Card component.</p>
              <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
                <li>⚡ Responsive Design</li>
                <li>🎨 Theme-aware</li>
                <li>🔧 Reusable Props</li>
              </ul>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}} className={themeClass}>
                  🌐 GitHub
                </a>
                <a href="https://www.linkedin.com/in/prashanth-b-h-617498281/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}} className={themeClass}>
                  🔗 LinkedIn
                </a>
              </div>
            </>
          }
          footer={
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="like-btn"
                label={like ? '❤️' : '🤍'}
                onClick={toggleLike}
              />
              <Button
                label="Follow"
                variant="primary"
                onClick={() => alert('You followed Prashanth B H!')}
              />
            </div>
          }
        />
      </section>

      {/* Input Fields */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Input Field</h2>
        <Input
          label="Enter a Name"
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Enter your Name"
          icon="👤"
          helperText="This will be displayed on your profile"
        />
        <Input
          label="Enter a Text/Bio"
          type="textarea"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          placeholder="Tell us something about yourself"
          helperText="Optional: Share your interests, profession, etc."
        />
        <Input
          label="Enter Age"
          type="number"
          value={numberValue}
          onChange={(e) => setNumberValue(e.target.value)}
          placeholder="Enter your age"
          icon="🎂"
          helperText={numberValue < 0 ? 'Age cannot be negative' : 'You must be at least 18 years old'}
          error={numberValue < 0}
        />
      </section>

      {/* Buttons */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Buttons</h2>
        <Button label="Primary" variant="primary" onClick={() => alert("Primary button clicked")} />
        &nbsp;&nbsp;
        <Button label="Delete" variant="danger" onClick={() => alert("Delete button clicked")} />
        &nbsp;&nbsp;
        <Button label="Secondary" variant="secondary" onClick={() => alert("Secondary button clicked")} />
        &nbsp;&nbsp;
        <Button label="Submit" onClick={handleClick} variant="primary" size="md" />
      </section>

      {/* Modal */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Modal</h2>
        <Button label="Open Modal" onClick={() => setIsModalOpen(true)} variant="secondary" />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="User Feedback"
        footer={
          <>
            <Button label="Cancel" variant="secondary" onClick={() => setIsModalOpen(false)} />
            &nbsp;&nbsp;
            <Button label="Submit" variant="primary" onClick={handleSubmit} />
          </>
        }
      >
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Feedback"
            width="80"
            height="80"
          />
          <div style={{ flex: 1 }}>
            <p>Please share your thoughts with us:</p>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Name:<br />
              <Input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{ width: '100%' }}
              />
            </label>
            <label style={{ display: 'block' }}>
              Feedback:<br />
              <Input
                      type="textarea"
                      placeholder="Your feedback..."
                      value={feedback}
                      onChange={(e) =>setFeedback(e.target.value)}
                      width="100%"
                      height="60px"
                         rows="4"
                    />
            </label>
          </div>
        </div>
      </Modal>
      </section>

      {/* Checkbox */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Checkbox</h2>
        <Checkbox
          label="I accept the Terms and Conditions"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          description="You must agree before submitting."
        />
      </section>

      {/* Radio Buttons */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Radio Buttons</h2>
        <Radio
          name="gender"
          value="male"
          selectedValue={selected}
          setSelectedValue={setSelected}
          label="👦 Male"
        />
        &nbsp;&nbsp;
        <Radio
          name="gender"
          value="female"
          selectedValue={selected}
          setSelectedValue={setSelected}
          label="👧 Female"
        />
      </section>

      {/* Single Select */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Single Select</h2>
        <Select
          label="🌍 Choose a Country"
          options={[
            { label: 'India', value: 'india' },
            { label: 'USA', value: 'usa' },
            { label: 'France', value: 'france' },
            { label: 'Japan', value: 'japan' },
            { label: 'Canada', value: 'canada' }
          ]}
          value={selectSingle}
          onChange={setSelectSingle}
          placeholder="-- Select a Country --"
          helperText="Choose your country of residence"
        />
      </section>

      {/* MultiSelect */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Multi Select</h2>
        <MultiSelect
          label="🌍 Select Countries"
          options={[
            { label: 'India', value: 'india' },
            { label: 'USA', value: 'usa' },
            { label: 'France', value: 'france' },
            { label: 'Japan', value: 'japan' },
            { label: 'Canada', value: 'canada' }
          ]}
          selected={selectMultiple}
          onChange={setSelectMultiple}
          placeholder="Select one or more countries"
          helperText="You can select multiple options"
        />
      </section>

      {/* Tabs */}
      <section style={{ marginBottom: '30px', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ marginBottom: '20px' }}>Tabs</h2>
        <Tabs
          tabs={[
            {
              label: 'Profile',
              content: (
                <div style={{ lineHeight: '1.8' }}>
                  <h3 style={{ textDecoration: 'underline' }}>User Profile:</h3>
                  <p><strong>Name:</strong> Prashanth B H</p>
                  <p><strong>Email:</strong> bhprashanth0@gmail.com</p>
                  <p><strong>Phone:</strong> +91-9880135087</p>
                  <p><strong>Location:</strong> Bangalore, Karnataka</p>
                  <p><strong>Career Objective:</strong> To obtain a challenging position that utilizes my skills in frontend development and offers opportunities for learning and growth.</p>
                </div>
              )
            },
            {
              label: 'Skills',
              content: (
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Git & GitHub</li>
                  <li>Storybook</li>
                </ul>
              )
            },
            {
              label: 'Projects',
              content: (
                <div style={{ lineHeight: '1.8' }}>
                  <ol>
                    <li>
                      <strong>UI Component Library</strong>
                      <p style={{ marginLeft: '15px' }}>
                        • Created customizable and theme-aware components like Button, Tabs, Modal, Input, etc.<br />
                        • Integrated with Storybook and added dark/light mode toggle.
                      </p>
                    </li>
                    <hr />
                    <li>
                      <strong>Weather App</strong>
                      <p style={{ marginLeft: '15px' }}>
                        • Developed a responsive weather forecast app using React that allows users to search for any city and view real-time weather data like temperature, humidity, wind speed, and conditions.<br />
                        • Technologies: React, React Hooks, OpenWeatherAPI, Axios, Geolocation API, Error Handling.
                      </p>
                    </li>
                  </ol>
                </div>
              )
            },
            {
              label: 'Contact',
              content: (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Phone: ${phone}, Message: ${message} is sent`);
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    maxWidth: '400px'
                  }}
                >
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>
                      Enter Phone Number:
                    </label>
                    <Input
                      type="number"
                      placeholder="Enter your Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      width="100%"
                      height="35px"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>
                      Message:
                    </label>
                    <Input
                      type="textarea"
                      placeholder="Enter message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      width="100%"
                      height="60px"
                    />
                  </div>
                  <Button label="Send" onClick={handleSend} variant="secondary" />
                </form>
              )
            }
          ]}
        />
      </section>
    </div>
  );
}

export default TestPage;
