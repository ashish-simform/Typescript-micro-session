/**
 * Generics are a TypeScript feature that allows us to pass in various types of data and create reusable code to handle different inputs
 */

function identity(arg: number): number {
  return arg;
}
/**
 * Or we can use any
 */
function identityWithAny(arg: any): any {
  return arg;
}

/**
 * With Generics
 */
function identityWithGeneric<Type>(arg: Type): Type {
  return arg;
}

identityWithGeneric(22);
identityWithGeneric("Typescript");
