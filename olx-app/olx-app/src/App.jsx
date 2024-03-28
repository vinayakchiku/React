import './App.css'
import Olx from './components/Olx.jsx'
import bike from './assets/bike.jpg'
import bike1 from './assets/bike1.jpg'
import bike2 from './assets/bike2.jpeg'

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
      bikeImg: bike1,
      price: 68000,
      yearKms: "2018 - 25000",
      bikeName: "Bajaj Pulsur 220",
      location: "SOMWAR PETH, PUNE",
      uploadDate: "TODAY",
    },

    {
      bikeImg: bike2,
      price: 195000,
      yearKms: "2020 - 28000",
      bikeName: "Royal Enfield Classic 350",
      location: "SOMWAR PETH, PUNE",
      uploadDate: "TODAY",
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
      bikeImg: bike,
      price: 195000,
      yearKms: "2020 - 28000",
      bikeName: "Royal Enfield Classic 350",
      location: "SOMWAR PETH, PUNE",
      uploadDate: "TODAY",
    }
  ]
  return (
    
      <div className='img-container'>
     {response.map((item, index)=>(
        <Olx
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
  
  )
}

export default App
