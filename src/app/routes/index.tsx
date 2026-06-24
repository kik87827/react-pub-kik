import { BrowserRouter, Routes, Route } from "react-router";
import PagesHome from "@/pages/home";
import PagesCategoryEngineering from "@/pages/category/engineering";
import PagesCategoryDesign from "@/pages/category/design";
import PagesArticle from "@pages/article";
import PagesNotFound from "@/pages/notfound";
import PagesBoard from "@/pages/board";

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagesHome />} />

        <Route path="category">
          <Route path="engineering" element={<PagesCategoryEngineering />} />
          <Route path="design" element={<PagesCategoryDesign />} />
          <Route path="board" element={<PagesBoard />} />
        </Route>

        <Route path="article/:articleId" element={<PagesArticle />} />

        <Route path="*" element={<PagesNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
