import { hash, compare, genSalt } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const hashPassword = async (password: string) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

const verifyPassword = async (password: string, hashedPassword: string) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const generateAccessToken = (data: { email: string }) => {
  const token = sign(
    { ...data },
    process.env.NEXT_PUBLIC_AccessTokenSecretKey as string,
    {
      expiresIn: "5d",
    }
  );
  return token;
};

const verifyAccessToken = (token: string) => {
  try {
    const tokenPayload = verify(
      token,
      process.env.NEXT_PUBLIC_AccessTokenSecretKey as string
    );
    return tokenPayload;
  } catch (err) {
    return false;
  }
};

// const generateRefreshToken = (data) => {
//   const token = sign({ ...data }, process.env.NEXT_PUBLIC_RefreshSecretKey, {
//     expiresIn: "5d",
//   });
//   return token;
// };

// const verifyResfreshToken = (token) => {
//   try {
//     const tokenPayload = verify(
//       token,
//       process.env.NEXT_PUBLIC_RefreshSecretKey
//     );
//     return tokenPayload;
//   } catch (err) {
//     return false;
//   }
// };

export { hashPassword, verifyPassword, generateAccessToken, verifyAccessToken };
