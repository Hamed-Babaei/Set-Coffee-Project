import Link from "next/link";
import styles from "./latest.module.css";
import { FaChevronLeft } from "react-icons/fa6";
import Product from "@/components/modules/product/Product";

const Latest = () => {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <div>
          <p>آخرین محصولات</p>
          <span>Latest products</span>
        </div>
        <Link className={styles.link} href={"/category"}>
          مشاهده همه <FaChevronLeft />{" "}
        </Link>
      </section>
      <main data-aos="fade-up" className={styles.products}>
        <Product score={5} />
        <Product score={3} />
        <Product score={1} />
        <Product score={2} />
        <Product score={2} />
        <Product score={4} />
        <Product score={2} />
        <Product score={1} />
      </main>
    </div>
  );
};

export default Latest;
