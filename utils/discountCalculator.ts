//okey we are in this file to calculate the discount amount dollas
 */

export function calculateDiscount(price: number, discountPercent: number): number {
  return price * (1 - discountPercent / 100);

  //exports this function to make it avail to other files. Price/discountPercentage are the first 2 parameters. The function then returns a number.  */
}
