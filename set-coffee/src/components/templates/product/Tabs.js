"use client";
import React from "react";
import styles from "./tabs.module.css";
import { useState } from "react";
import Description from "./Description";
import MoreInfos from "./MoreInfos";
import Comments from "./Comments";
const Tabs = ({ product }) => {
  const [tab, setTab] = useState("description");
  return (
    <div data-aos="fade-left" className={styles.tabs}>
      <input
        onClick={() => setTab("description")}
        type="radio"
        id="description"
        name="tab-control"
        checked={tab == "description" && "checked"}
      />
      <input
        onClick={() => setTab("moreInfos")}
        type="radio"
        id="moreInfos"
        name="tab-control"
        checked={tab == "moreInfos" && "checked"}
      />
      <input
        onClick={() => setTab("comments")}
        type="radio"
        id="comments"
        name="tab-control"
        checked={tab == "comments" && "checked"}
      />
      <ul>
        <li title="Features">
          <label htmlFor="description" role="button">
            توضیحات
          </label>
        </li>
        <li title="Delivery Contents">
          <label htmlFor="moreInfos" role="button">
            اطلاعات بیشتر
          </label>
        </li>
        <li title="Shipping">
          <label htmlFor="comments" role="button">
            نظرات (
            {product.comments.filter((comment) => comment.isAccept).length})
          </label>
        </li>
      </ul>

      <div className={styles.contents}>
        <section className={styles.tabs_content}>
          <Description />
        </section>
        <section className={styles.tabs_content}>
          <MoreInfos product={JSON.parse(JSON.stringify(product))} />
        </section>
        <section className={styles.tabs_content}>
          <Comments
            productID={product._id}
            comments={JSON.parse(JSON.stringify(product.comments))}
          />
        </section>
      </div>
    </div>
  );
};

export default Tabs;
