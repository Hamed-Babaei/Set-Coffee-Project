import styles from "@/styles/product.module.css";
import Gallery from "@/components/templates/product/Gallery";
import Details from "@/components/templates/product/Details";
import Tabs from "@/components/templates/product/Tabs";
import MoreProducts from "@/components/templates/product/MoreProducts";

import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import { authUser, verifyAccessToken } from "@/utils/auth";
import ProductModel from "@/models/Product";
import connectToDB from "@/configs/db";
import { cookies } from "next/headers";
import UserModel from "@/models/User";

const product = async ({ params }) => {
  // Auth User fn
  // const user = await authUser();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await UserModel.findOne({ email: tokenPayload.email });
    }
  }
  // Auth User fn

  connectToDB();
  const productID = params.id;
  console.log("productID => ", productID);
  const product = await ProductModel.findOne({ _id: productID }).populate(
    "comments"
  );

  const relatedProducts = await ProductModel.find({ smell: product.smell });

  return (
    <div className={styles.container}>
      <Navbar isLogin={user ? true : false} />
      <div data-aos="fade-up" className={styles.contents}>
        <div className={styles.main}>
          <Details product={JSON.parse(JSON.stringify(product))} />
          <Gallery />
        </div>
        <Tabs product={JSON.parse(JSON.stringify(product))} />
        <MoreProducts
          relatedProducts={JSON.parse(JSON.stringify(relatedProducts))}
        />
      </div>
      <Footer />
    </div>
  );
};

export default product;
