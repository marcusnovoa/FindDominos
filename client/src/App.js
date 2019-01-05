import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import AddressForm from './components/UI/Forms/AddressForm/AddressForm';
import StoreLocations from './components/StoreLocations/StoreLocations';
import MyModal from './components/UI/Modal/Modal';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    modalVisible: false,
    nearbyStores: [],
    selectedStore: {
      storeLatitude: '',
      storeLongitude: ''
    },
    addressInput: {
      street: '',
      city: '',
      state: '',
      zip: ''
    }
  }

  openModal = (lat, lon) => this.setState({ modalVisible: true, selectedStore: { ...this.state.selectedStore, storeLatitude: lat, storeLongitude: lon } });
  closeModal = () => this.setState({ modalVisible: false });

  addressInputChangeHandler = e => this.setState({ addressInput: { ...this.state.addressInput, [e.target.name]: e.target.value } });
  addressInputClearHandler = e => {
    e.preventDefault();
    this.setState({ addressInput: { ...this.state.addressInput, street: '', city: '', state: '', zip: '' } });
  }

  addressSubmitHandler = e => {
    e.preventDefault();
    axios.post('/address-input', { ...this.state.addressInput })
      .then(res => res.send(res.config.data))
      .catch(err => console.log(err));
    this.getNearbyStores();
  }

  getNearbyStores = () => {
    if (this.state.addressInput.zip !== '') {
      axios.get('/stores/nearby')
        .then(res => {
          const { Stores } = res.data.result;
          if (Stores.length > 0) this.setState({ nearbyStores: Stores });
          else alert('No stores found. Please try again.');
        })
        .catch(err => console.log(err));
    } else alert('Zip Code field is required.');
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <MyModal
          close={this.closeModal}
          visible={this.state.modalVisible}
          latitude={this.state.selectedStore.storeLatitude}
          longitude={this.state.selectedStore.storeLongitude} />
        <AddressForm
          street={this.state.addressInput.street}
          city={this.state.addressInput.city}
          state={this.state.addressInput.state}
          zip={this.state.addressInput.zip}
          inputChange={this.addressInputChangeHandler}
          addressSubmit={this.addressSubmitHandler}
          addressClear={this.addressInputClearHandler} />
        <StoreLocations
          nearbyStores={this.state.nearbyStores}
          openModal={this.openModal} />
        <Footer stores={this.state.nearbyStores} />
      </div>
    );
  }
}

export default App;
