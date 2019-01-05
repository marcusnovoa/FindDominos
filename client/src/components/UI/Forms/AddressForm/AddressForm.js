import React from 'react';
import './AddressForm.css';

import Button from '../../Button/Button';
import unitedStates from '../../../../config/unitedStates';

const AddressForm = props => {
  const {
    addressClear,
    addressSubmit,
    inputChange
  } = props;
  const {
    street,
    city,
    state,
    zip
  } = props.addressInput;

  return (
    <form className="AddressForm">
      <div className="address-form-title">
        <h2 style={{ margin: 0 }}>Enter Address</h2>
      </div>
      <div className="form-inner">
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            name="street"
            className="address-input"
            value={street}
            onChange={inputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            className="address-input"
            value={city}
            onChange={inputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <select
            name="state"
            className="address-input"
            onChange={inputChange}
            value={state}
          >
            {unitedStates.map(state => <option key={state.alpha} value={state.alpha}>{state.name}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="zip">ZIP Code<span className="input-required">*</span></label>
          <input
            type="text"
            name="zip"
            className="address-input"
            value={zip}
            onChange={inputChange}
          />
        </div>
        <div className="address-form-btns">
          <Button
            classes="btn find-store"
            clickHandler={addressSubmit}
            text="Find Stores" />
          <Button
            classes="btn clear-address"
            clickHandler={addressClear}
            text="Clear Address" />
        </div> {/* address-form-btns */}
      </div> {/* form-inner */}
    </form>
  );
}

export default AddressForm;
