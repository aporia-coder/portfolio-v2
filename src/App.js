import { Router, Routes, Route } from 'react-router-dom'
import LandingPageContainer from './containers/LandingPage/LandingPageContainer'

const App = () => (
  <Router>
    <Routes>
      <Route index element={<LandingPageContainer />} />
      <Route path="*" element={<h1>404 PAGE</h1>} />
    </Routes>
  </Router>
)

export default App
