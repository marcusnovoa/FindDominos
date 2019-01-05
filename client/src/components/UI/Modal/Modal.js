import React from 'react';
import Modal from 'react-awesome-modal';
import './Modal.css';

import CloseIcon from '../../../assets/close_x.png';

const MyModal = props => {
  const { close, latitude, longitude, visible } = props;

  return (
    <section>
      {visible ? <img className="close-icon" src={CloseIcon} alt="Close Icon" onClick={() => close()} /> : null}
      <Modal visible={visible} width="90%" height="90%" effect="fadeInUp" onClickAway={() => close()}>
        <div className="Modal">
          <div className="gmap-canvas">
            <iframe
              title="Domino's Store Map"
              width="100%"
              height="100%"
              src={`https://maps.google.com/maps?q=%40${latitude}%2C${longitude}&t=&z=19&ie=UTF8&output=embed`}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0" />
          </div>
        </div> {/* Modal */}
      </Modal>
    </section>
  );
}

export default MyModal;
