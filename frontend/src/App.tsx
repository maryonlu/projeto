
import Header from './components/Header';
import Salecard from './components/Salecard';
import NotificationButton from "./components/NotificationButton";



function App() {


  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
              <Salecard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
