import { News } from "./components/news/News"
import { Navbar } from "./components/menu/Navbar"
import { Home } from "./components/home/Home"
import { Infos } from "./components/infos/Infos"
import { InfosMain } from "./components/infosMain/infosMain"
import { InfosWoe } from "./components/infosWoe/InfosWoe"
import { BackgroundMusic } from "./components/backgroundMusic/BackgroundMusic"
import { Download } from "./components/download/Download"
import { Cadastrar } from "./components/register/Register"
import { Review } from "./components/review/Review"
import { Foot } from "./components/foot/Foot"

function App() {

  return (
    <section className="main">
      <Navbar />
      <Home />
      <News />
      <Infos />
      <InfosMain />
      <InfosWoe />
      <Download />
      <Cadastrar />
      <Review />
      <Foot />

      <BackgroundMusic />
    </section>
  )
}

export default App
