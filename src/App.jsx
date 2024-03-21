import Form from "./components/Form"
import Leaflet from "./components/Leaflet"
import Weather from "./components/Weather"
function App() {
  return (
    <div className="text-center h-screen bg-cover opacity-70" style={{backgroundImage:`url(https://t4.ftcdn.net/jpg/03/48/58/83/360_F_348588333_yEOn7lnklwAcNVSWf3iHUpFqmDgyOvCD.jpg)`}}>
    <Form />
    <Weather />
    <Leaflet />
    </div>
  )
}
export default App