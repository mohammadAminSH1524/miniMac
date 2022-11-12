import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/home/homepage";
import NotFound from "../pages/notFound/notfound";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Layout;
