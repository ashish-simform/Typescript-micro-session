/**
 * Brand type
 * It's a small abuse of the structural typing system to allow us to simulate nominal typing
 */

declare const brand: unique symbol;

/**
 * { [brand]: TBrand}; this object never satisfy at run time
 * and above const brand also there at type level
 */

type Brand<T, TBrand> = T & { [brand]: TBrand };

type Valid<T> = Brand<T, "Valid">;

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

export const validatePassword = (values: PasswordValues) => {
  if (values.password !== values.confirmPassword) {
    throw new Error("Password do not match");
  }
  return values as Valid<PasswordValues>;
};

const createUserOnApi = (values: Valid<PasswordValues>) => {
  //Imagine this function creates the user on the API
  console.log(values);
};

const onSubmitHandler = (values: PasswordValues) => {
  const validateVal = validatePassword(values);

  // const obj: PasswordValues = {
  //   password: "",
  //   confirmPassword: ""
  // }
  createUserOnApi(validateVal);
};

onSubmitHandler({ confirmPassword: "", password: "" });
