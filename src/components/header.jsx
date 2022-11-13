import styles from "./header.module.css";
import { BiUser } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.containerControll}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>فروشگاه انلاین اسباب بازی </h1>
        </div>
        <div className={styles.searchBoxContainer}>
            <input className={styles.searchInput}  placeholder="جستجو در میان اسباب بازی ها" type="text"  autoComplete="off"/>
            <button className={styles.searchBtn}><BsSearch/></button>
        </div>
        <div className={styles.btnsContainer}>
          <Link to="/login" className={styles.profileContainer}>
            <span className={styles.profileLogo}>
              <BiUser />
            </span>
            <p className={styles.profileText}> ورود/ثبت نام</p>
          </Link>
          <Link to="/cart" className={styles.cartContainer}>
            <span className={styles.cartLogo}>
                <span className={styles.cartCount}>0</span>
              <IoCartOutline />
            </span>
            <p  className={styles.cartText}>سبد خرید</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
