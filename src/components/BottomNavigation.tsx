// components/BottomNavigation.tsx
import Link from "next/link";
import {
  FaHome,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaList,
} from "react-icons/fa";
import styles from "./BottomNavigation.module.css";

const BottomNavigation = () => {
  return (
    <div className={styles.bottomNavigation}>
      <Link href="/menu">
        <div className={styles.navItem}>
          <FaList size={24} />
          <span>메뉴</span>
        </div>
      </Link>
      <Link href="/search">
        <div className={styles.navItem}>
          <FaSearch size={24} />
          <span>찾기</span>
        </div>
      </Link>
      <Link href="/home">
        <div className={styles.navItem}>
          <FaHome size={24} />
          <span>홈</span>
        </div>
      </Link>
      <Link href="/profile">
        <div className={styles.navItem}>
          <FaUser size={24} />
          <span>프로필</span>
        </div>
      </Link>
      <Link href="/cart">
        <div className={styles.navItem}>
          <FaShoppingCart size={24} />
          <span>쇼핑카트</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomNavigation;
