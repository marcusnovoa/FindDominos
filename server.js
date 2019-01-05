const express = require('express');
const cors = require('cors');
const pizzapi = require('pizzapi');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let addressInput = {};

const corsOptions = {
  origin: 'https://order.dominos.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/stores/nearby', cors(corsOptions), (req, res) => {
  const { street, city, state, zip } = addressInput;
  pizzapi.Util.findNearbyStores(
    `${street}, ${city}, ${state}, ${zip}`,
    'Delivery',
    storeData => {
      res.send(storeData);
    }
  );
});

app.post('/address-input', (req, res) => {
  addressInput = req.body;
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
