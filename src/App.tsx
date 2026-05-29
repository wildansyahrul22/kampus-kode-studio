import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { ScrollToTop } from "@/components/ScrollToTop"
import Home from "@/pages/Home"
import Projects from "@/pages/Projects"
import ProjectDetail from "@/pages/ProjectDetail"

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
