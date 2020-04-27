const cities = ['Panama', 'Colon', 'Santiago', 'David', 'Chorrera', 'Boquete', 'San Miguelito'];

const randomCity = () => cities[Math.floor(Math.random() * cities.length)];

module.exports = randomCity;
