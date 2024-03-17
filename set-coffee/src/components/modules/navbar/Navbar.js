import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <main>
          <div>
            <Link href="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>
          <ul className={styles.links}>
            <li>
              <Link href={"/"}>صفحه‌اصلی</Link>
            </li>
            <li>
              <Link href={"/category"}>فروشگاه</Link>
            </li>
            <li>
              <Link href={"/blog"}>بلاگ</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>تماس با ما</Link>
            </li>
            <li>
              <Link href={"/about-us"}>درباره ما</Link>
            </li>
            <li>
              <Link href={"/rules"}>قوانین</Link>
            </li>
            <li>
              <Link href={"/login-register"}>ورود - عضویت</Link>
            </li>
            {/* Start My-account section */}
            <div className={styles.dropdown}>
              <Link href={"/p-user"}>
                <IoIosArrowDown className={styles.dropdown_icons} />
                حساب کاربری
              </Link>

              <div className={styles.dropdown_content}>
                <Link href={"/p-user/order"}>سفارشات</Link>
                <Link href={"/p-user/tickets"}>تیکت های پشتیبانی</Link>
                <Link href={"/p-user/comments"}>کامنت ها</Link>
                <Link href={"/p-user/wishlist"}>علاقه مندی ها</Link>
                <Link href={"/p-user/account-details"}>جزییات حساب</Link>
              </div>
            </div>
            {/* End My-account section */}
          </ul>
          <div className={styles.navbar_icons}>
            <Link href={"/cart"}>
              <FaShoppingCart />
              <span>1</span>
            </Link>
            <Link href={"/wishlist"}>
              <FaRegHeart />
              <span>1</span>
            </Link>
          </div>
        </main>
      </nav>
    </>
  );
}

export default Navbar;
