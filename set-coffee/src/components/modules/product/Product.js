import Link from "next/link";
import styles from "./Product.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";

const Card = ({ name, price, score, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.details_container}>
        <img
          src={
            img ||
            "https://set-coffee.com/wp-content/uploads/2021/10/041-430x430.png"
          }
          alt=""
        />
        <div className={styles.icons}>
          <Link href="/">
            <CiSearch />
            <p className={styles.tooltip}>مشاهده سریع</p>
          </Link>
          <div>
            <CiHeart />
            <p className={styles.tooltip}>افزودن به علاقه مندی ها </p>
          </div>
        </div>
        <button>افزودن به سبد خرید</button>
      </div>

      <div className={styles.details}>
        <Link href={"/"}>{name}</Link>
        <div>
          {new Array(score).fill(0).map((item, index) => (
            <FaStar key={index} />
          ))}

          {new Array(5 - score).fill(0).map((item, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        <span>{price?.toLocaleString()} تومان</span>
      </div>
    </div>
  );
};

export default Card;
