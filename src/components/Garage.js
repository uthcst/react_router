import React from 'react';
import Truck from './Truck';
import Car from './Car';
import Motorcycle from './Motorcycle';
import Bicycle from './Bicycle';

function Garage() {
  const bicycleData = { color: "red", brand: "velosolex" };
  return (
    <>
      <h3>Who lives in my Garage?</h3>
{/*       <div>
        <label for="bikeOnly">Bike Only</label>
        <input type="checkbox" id="bikeOnly" name="bikeOnly" value="Bike" />
      </div> */}
      <Car color="red" />
      <Car color="green" />
      <Motorcycle model="XSR-900" />
      <Bicycle info={bicycleData} />
      <Truck />
    </>
  );
}

export default Garage;
