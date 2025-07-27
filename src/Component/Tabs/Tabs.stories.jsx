import React, { useState } from 'react';
import Tabs from './Tabs';
import Input from '../Input/Input';
import Button from '../Button/Button'
export default {
  title: 'Components/Tabs',
  component: Tabs,
};

export const Default = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const handleSend = () => {
    alert(`Phone: ${phone}, Message: ${message} is sent`);
    setPhone('');
    setMessage('');
  };
  return (
    <>
      <h2 style={{ textAlign: 'center', margin: '30px 0' }}>Tabs Variants</h2>
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
            ),
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
            ),
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
            ),
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
                  maxWidth: '400px',
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
            ),
          },
        ]}
      />
    </>
  );
};
