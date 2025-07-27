import React, { useState } from 'react';
import Modal from './Modal';
import Button from '../Button/Button';
import Input from '../Input/Input'
export default {
  title: 'Components/Modal',
  component: Modal,
};

export const BasicModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [feedback, setFeedback] = useState('');
  const handleSubmit = () => {
    alert(`Name: ${userName}\nFeedback: ${feedback} is submitted!`);
    setIsModalOpen(false);
    setUserName('');
    setFeedback('');
  };
  return (
    <>
     <h2>Modal Variants:  </h2>
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
    </>
  );
};
