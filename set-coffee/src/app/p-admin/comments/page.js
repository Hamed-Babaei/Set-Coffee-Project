import Table from "@/components/templates/p-admin/comments/Table ";
import Layout from "@/components/layouts/UserPanelLayout";
import React from "react";
import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import { authUser } from "@/utils/serverHelpers";
import styles from "@/components/templates/p-admin/comments/table.module.css";
const page = async () => {
  connectToDB();
  const user = await authUser();
  const comments = await CommentModel
    .find
    // { user: String(user._id) },
    // "-__v"
    ()
    .populate("productID", "name");

  console.log("comments => ", comments);

  return (
    <Layout>
      <main>
        <Table
          comments={JSON.parse(JSON.stringify(comments))}
          title="لیست کامنت‌ها"
        />
        {/* <p className={styles.empty}>کامنتی وجود ندارد</p> */}
      </main>
    </Layout>
  );
};

export default page;
