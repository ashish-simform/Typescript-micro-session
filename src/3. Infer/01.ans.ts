import { Names } from "./01.que";

/**
 * `firstName LastName`
 */

type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never;

type MySurname = GetSurname<Names[0]>; //string = first name's surname
