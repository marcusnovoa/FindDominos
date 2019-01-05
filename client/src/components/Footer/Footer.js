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
  const date = new Date();
  const fullYear = date.getFullYear();

  return (
    <div className="Footer" style={styles}>
      <p style={{ margin: 0 }}>&copy; {fullYear} FindDominos developed by Marcus Novoa</p>
    </div>
  );
}

export default Footer;
