import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPageContainer from './containers/LandingPage/LandingPageContainer'
import GlobalStyle from './styles/GlobalStyle'

import Cursor from './components/Cursor'

const App = () => (
  <>
    <GlobalStyle />
    <Cursor />
    <Router>
      <Routes>
        <Route index element={<LandingPageContainer />} />
        <Route path="*" element={<h1>404 PAGE</h1>} />
      </Routes>
    </Router>
  </>
)

export default App
