import React ,{useContext,useState} from 'react';
import Card from './Card';
import Button from '../Button/Button';
import { ThemeContext } from '../../ThemeContext';
import "../Button/Button.css";
export default {
  title: 'Components/Card',
  component: Card,
};
export const CardComponent= () => {
  const [like, setLike] = useState(false);
  const toggleLike = () => setLike(!like);
const { theme } = useContext(ThemeContext);
  const themeClass = theme === 'dark' ? 'custom-button dark' : '';
  return (
    <div>
    <h2 >Card Variants:</h2>
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
  </div>
  );
};
