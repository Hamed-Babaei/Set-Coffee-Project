import connectToDB from "@/configs/db";
import DiscountModel from "@/models/Discount";
import { authUser } from "@/utils/serverHelpers";

export async function POST(req) {
  try {
    const user = await authUser();
    connectToDB();
    const body = await req.json();
    const { code, percent, maxUse } = body;

    // Validation (You) ✅

    await DiscountModel.create({
      code,
      percent,
      maxUse,
      user: user._id,
    });

    return Response.json(
      { message: "Discount code created successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
