import About from "./Components/About/About";
import Home from "./Components/Navbar/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Title from "./Components/Title/Title";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Title title={"About Me"}/>
      <About/>
       <Title title={"Skills"}/>
      <Skills/>

    </>
  );
}

export default App;
