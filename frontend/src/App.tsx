import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NewsListComponent from "./pages/news_component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsListComponent />} />
    </Routes>
  );
};

export default App;
