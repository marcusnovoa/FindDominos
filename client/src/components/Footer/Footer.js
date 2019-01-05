import React from 'react';
import './Footer.css';

const Footer = props => {
  const { stores } = props;
  const styles = stores.length === 0 ?
    {
      position: 'absolute',
      width: '100%',
      bottom: '0'
    } : null;

  return (
    <div className="Footer" style={styles}>
      <p style={{ margin: 0 }}>&copy; 2019 Developed by Marcus Novoa</p>
    </div>
  );
}

export default Footer;
