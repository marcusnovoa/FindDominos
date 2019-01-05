import React from 'react';
import './Store.css';

import Button from '../UI/Button/Button';

const Store = props => {
  const { openModal } = props;
  const {
    StoreID,
    Phone,
    AddressDescription,
    IsDeliveryStore,
  } = props.store;
  const { StoreLatitude, StoreLongitude } = props.store.StoreCoordinates;
  const address = AddressDescription.split('\n');

  return (
    <div className="Store">
      <div className="store-title">
        <h2 style={{ margin: 0 }}>Store #{StoreID}</h2>
      </div>
      <div className="store-info">
        <div className="store-info-left">
          <div className="address">{address.map(add => <p key={add} style={{ margin: 0, fontWeight: 'bold' }}>{add}</p>)}</div>
          <p style={{ marginBottom: 0 }}>Phone: {Phone}</p>
          <p style={{ marginBottom: 0, color: IsDeliveryStore ? '#2ecc71' : '#e74c3c' }}>
            {IsDeliveryStore ? 'Delivery Available' : 'No Delivery'}
          </p>
        </div> {/* store-info-left */}
        <div className="store-info-right">
          <Button
            classes="btn view-store"
            clickHandler={() => openModal(StoreLatitude, StoreLongitude)}
            text="View Store" />
        </div> {/* store-info-right */}
      </div> {/* store-info */}
    </div>
  )
}

export default Store;
