import Car from "../components/Car";
const cars = ['Red', 'Green', 'Yelllow'];
const CarList = () => (
    <div className="App">
        <header className="App-header">
            <h1>
                List of car colors
            </h1>
            <ul>
                {cars.map((car) => <Car color={car} />)}
            </ul>
        </header>
    </div>
);


export default CarList;