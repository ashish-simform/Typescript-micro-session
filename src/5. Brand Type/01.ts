/**
 * Typescript is a Structural Type Systems.
 * A structural type system means that when comparing types, TypeScript only
 * takes into account the members of the type.
 */

/**
 * Example 1
 */
type User = { id: string };
type Product = { id: string };

let user: User = { id: "ak__" };
let product: Product = { id: "vs code" };

/**
 * So despite of having different types it is not giving the error
 * Because of the same structure
 */

user = product;

/**
 * Example 2
 */
type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D = { x: 1, y: 12 };
let point3D = { x: 12, y: 13, z: 32 };

//extra info is OK
point2D = point3D; //no error

/**
 * This can have drawbacks, for example there are cases
 * where a string or number can have special context and you
 * don't want to ever make the values transferrable. For
 * example:
    -  User Input Strings (unsafe)
    -  Translation Strings
    -  User Identification Numbers
    -  Access Tokens
 */

const validateUserInput = (input: string) => {
  const simpleValidatedInput = input.replace(/\</g, "≤");
  return simpleValidatedInput;
};

const input = "alert('Hello')";
validateUserInput(input); // problem
