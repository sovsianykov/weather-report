import React from "react";
import Home from "./pages/Home";


function App() {
 //  const  getReport = async () => {
 // try   {
 //      const response =
 //          await axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Vishneve%20kiev%20ukraine?unitGroup=metric&key=DNXXQ6TVGXMLXZRFYJMA92QSE&include=fcst%2Chours%2Ccurrent')
 //      console.log(response.data);
 //    } catch (error) {
 //      console.log(error)
 // }
 //  }
 //  getReport().then(r => r)

  return (
    <div className="App">
    <Home/>
    </div>
  );
}

export default App;
