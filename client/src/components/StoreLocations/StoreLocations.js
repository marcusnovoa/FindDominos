import React from 'react';
import './StoreLocations.css';

import Store from '../Store/Store';

const StoreLocations = props => {
  const { nearbyStores, openModal } = props;

  return (
    <div className="Stores">
      {nearbyStores.map(store => <Store key={store.StoreID} store={store} openModal={openModal} />)}
    </div>
  );
}

export default StoreLocations;
