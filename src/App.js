import Header from "./components/Header";


function App() {

  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }

  return (
    <div >
      < Header />
      <h1 className="text-2xl font-bold underline">hello</h1>
    </div>
  )
}

export default App
