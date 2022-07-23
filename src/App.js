import Header from "./components/Header";
import CVform from "./components/CVform";


function App() {

  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }

  return (
    <div >
      < Header />
      <CVform />
    </div>
  )
}

export default App
