import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NewsListComponent from "./pages/news_component";
import ArchivedNewsComponent from "./pages/archived_news_component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsListComponent />} />
      <Route path="/news/archived" element={<ArchivedNewsComponent />} />
    </Routes>
  );
};

export default App;
