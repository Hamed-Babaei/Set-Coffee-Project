import {
  generateAccessToken,
  generateRefreshToken,
  validateEmail,
  validatePassword,
  verifyPassword,
} from "@/utils/auth";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { email, password } = body;
    console.log("Body ->", body);

    // Validation
    const isValidEmail = validateEmail(email);
    console.log("isValidEmail => ", isValidEmail);
    const isValidPassword = validatePassword(password);
    console.log("isValidPassword => ", isValidPassword);
    if (!isValidEmail || !isValidPassword) {
      return Response.json(
        { message: "email or password is invalid" },
        { status: 419 }
      );
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 422 });
    }

    const isCorrectPasswordWithHash = verifyPassword(password, user.password);

    if (!isCorrectPasswordWithHash) {
      return Response.json(
        { message: "Email or password is not correct" },
        { status: 401 }
      );
    }

    const accessToken = generateAccessToken({ email });
    const refreshToken = generateRefreshToken({ email });

    await UserModel.findOneAndUpdate(
      { email },
      {
        $set: {
          refreshToken,
        },
      }
    );

    return Response.json(
      { message: "User logged in successfully :))" },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${accessToken};path=/;httpOnly=true;`,
        },
      }
    );
  } catch (error) {
    console.log("error ->", error);
    return Response.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
}
