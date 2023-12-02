import { useState } from "react";
import Form from "./components/Form";
import Wether from "./components/Wether";

const ApiKey = "23900ea9faca2f25bec63b5cdf1f1500"

function App() {

  const [wetherData, setWetherData] = useState({
    temprature: "",
    city: "",
    country: "",
    humadity: "",
    description: "",
    error: ""
  })

  const getWether = async (e) => {
    e.preventDefault()

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    console.log(city, country)
    // const ApiData = await fetch('http://api.openwethermap.org/data/2.5/wether?q=cairo,egypt&appid=23900ea9faca2f25bec63b5cdf1f1500')
    // const data = ApiData.json()
    // if (city && country) {
    //   setWetherData({
    //     temprature:data.main.temp,
    //     city:data.main.name,
    //     country:data.sys.country,
    //     humadity:data.main.humadity,
    //     description:data.wether[0].description,
    //     error:""
    //   })
    if (city && country) {
      setWetherData({
        temprature: 30,
        city: 'cairo',
        country: 'egypt',
        humadity: 76,
        description: "no",
        error: ""
      })

    } else {
      setWetherData({
        temprature: "",
        city: "",
        country: "",
        humadity: "",
        description: "",
        error: "please enter city and country"
      })
    }
  }

  console.log(wetherData)
  return (
    <div className="App">
      <div className="container">

        <Form getWether={getWether} />
        <Wether
          temprature={wetherData.temprature}
          city={wetherData.city}
          country={wetherData.country}
          humadity={wetherData.humadity}
          description={wetherData.description}
          error={wetherData.error}

        />
      </div>
    </div>
  );
}

export default App;
