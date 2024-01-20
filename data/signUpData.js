import { v4 as uuidv4 } from "uuid";

export const signUpData = {
  firstname: "Anna",
  lastname: "Testowa",
  email: `${uuidv4()}@gmail.com`,
  password: "User1234",
};
