import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Contact from './pages/Contact'
import NoMatch from './pages/NoMatch'
import Planning from './pages/Planning'
import Stream from './pages/Stream'

const App = () => {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer/>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
