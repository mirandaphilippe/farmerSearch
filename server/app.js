const express = require('express')
const app = express()
const port = 8080

const farms =[
  {
    "id": 0,
    "name": "Noelle Lowery",
    "address": {
      "street": "Scholes Street",
      "state": "New York",
      "address": "540 4888",
      "country": "Martinique"
    },
    "document": {
      "documentNumber": "2836.24",
      "documentType": "Passport"
    }
  },
  {
    "id": 1,
    "name": "Anthony Cherry",
    "address": {
      "street": "Crown Street",
      "state": "Nebraska",
      "address": "824 7428",
      "country": "Angola"
    },
    "document": {
      "documentNumber": "3391.61",
      "documentType": "Social Security"
    }
  },
  {
    "id": 2,
    "name": "Bernadette Andrews",
    "address": {
      "street": "Nixon Court",
      "state": "Texas",
      "address": "773 5944",
      "country": "Falkland Islands (Malvinas)"
    },
    "document": {
      "documentNumber": "3362.36",
      "documentType": "Passport"
    }
  },
  {
    "id": 3,
    "name": "Twila Trujillo",
    "address": {
      "street": "Blake Avenue",
      "state": "North Dakota",
      "address": "905 5869",
      "country": "Guadeloupe"
    },
    "document": {
      "documentNumber": "1672.26",
      "documentType": "Passport"
    }
  },
  {
    "id": 4,
    "name": "Pierce Macdonald",
    "address": {
      "street": "Gerald Court",
      "state": "Puerto Rico",
      "address": "547 1856",
      "country": "France, Metropolitan"
    },
    "document": {
      "documentNumber": "1456.31",
      "documentType": "Social Security"
    }
  },
  {
    "id": 5,
    "name": "Betsy Fischer",
    "address": {
      "street": "Carlton Avenue",
      "state": "Wisconsin",
      "address": "781 9149",
      "country": "Paraguay"
    },
    "document": {
      "documentNumber": "2550.90",
      "documentType": "Social Security"
    }
  },
  {
    "id": 6,
    "name": "Linda Harrison",
    "address": {
      "street": "Kenmore Terrace",
      "state": "Kansas",
      "address": "327 6733",
      "country": "Gibraltar"
    },
    "document": {
      "documentNumber": "1924.85",
      "documentType": "Social Security"
    }
  }
]

app.get('/api/search/:farmerName', (req, res) => {
  let filteredFarmers = farmers.filter(farmer => {
    farmer.name.includes(req.params.farmerName);
  })
  res.json(filteredFarmers);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
