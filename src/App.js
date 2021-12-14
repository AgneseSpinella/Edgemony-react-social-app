import Header from "./components/Header/Index";
import Footer from "./components/Footer";

function App() {
  const name = "Feisbrut";
  const nav = [
    { link: "/", label: "Home" },
    { link: "/messages", label: "Messages" },
    { link: "/friends", label: "Friends" },
  ];

  return (
    <div>
      <Header name={name} links={nav} />
      <p>Lorem ipsum</p>
      <Footer />
    </div>
  );
}

export default App;