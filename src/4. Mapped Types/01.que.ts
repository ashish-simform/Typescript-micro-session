/**
 * When you don’t want to repeat yourself, sometimes a type needs to be based on another type.
 * A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type:
 */

/**
 * Make the getter for the object
 */

export interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}
/**
type AttributeGetters = {
    getFirstName: () => string;
    getLastName: () => string;
    getAge: () => number;
}
 */
