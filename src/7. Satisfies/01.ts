/**
 * The main difference between the record and satisfies is that the satisfies operator can be used to check whether a value satisfies any type
 * while the record type can only be used to create a type that represents a record of key-value pairs.
 */

const routes: Record<string, {}> = {
  "/": {},
  "/users": {},
  "/admin/users": {},
};

// No error!
routes.awdkjanwdkjn;

/**
 * When you use satisfies, the value BEATS the type.
   This means it infers the narrowest possible type, not the wider type you specify:
 */

const route = {
  "/": {},
  "/users": {},
  "/admin/users": {},
} satisfies Record<string, {}>;

// Property 'awdkjanwdkjn' does not exist on type
// '{ "/": {}; "/users": {}; "/admin/users": {}; }'
route.awdkjanwdkjn;

/**
The rule of thumb is that you should only use satisfies in two specific situations:
 => You want the EXACT type of the variable, not the WIDER type.
 => The type is complex enough that you want to make sure you didn’t mess it up
 */
