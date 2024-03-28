import "./App.css";
import OlxItem from "./components/OlxItem";
import bike from "./assets/bike.jpeg";
import bike2 from "./assets/bike2.jpeg";
import bike3 from "./assets/bike3.jpeg";
import Person from "./components/Person";

function App() {
  const response = [
    {
      bikeImg: bike,
      price: 0,
      yearKms: "2019 - 65000",
      bikeName: '',
      location: "DECCAN, PUNE",
      uploadDate: "YESTERDAY",
    },

    {
      bikeImg: bike2,
      price: 68000,
      yearKms: "2018 - 25000",
      bikeName: "Bajaj Pulsur 220",
      location: "SOMWAR PETH, PUNE",
      uploadDate: "TODAY",
    },

    {
      bikeImg: bike3,
      price: 195000,
      yearKms: "2020 - 28000",
      bikeName: "Royal Enfield Classic 350",
      location: "SOMWAR PETH, PUNE",
      uploadDate: "TODAY",
    }


  ];

  return (
    <div className="app-container">
      {response.map((item, index) => (
        <OlxItem
          key={index}
          bikeImg={item.bikeImg}
          price={item.price}
          yearKms={item.yearKms}
          bikeName={item.bikeName}
          location={item.location}
          uploadDate={item.uploadDate}
        />
      ))}
    </div>
    // <>
    //   <Person name="Akshay" city="Banglore" />

    //   <Person name="Vijay" city="Amravati" />

    //   <Person name="Shweta" city="Pune" />
    // </>
  );
}

export default App;
