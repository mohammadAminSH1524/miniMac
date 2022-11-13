import { Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Homepage from "../pages/home/homepage";
import NotFound from "../pages/notFound/notfound";
import styles from "./layout.module.css"

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Layout;
