export function calculateTax(price, category) {
    //okey this is the tax cal. different from the discount cal cus it calculates taxes. */
    if (category.toLowerCase() === "groceries") {
        // .toLowerCase() makes "Groceries", "GROCERIES", "groceries" all work
        return (price * 3) / 100;
        // now it returns the tax cal price. Groceries are taxed 3%. So the price times 3 divided by 100 */
    }
    return (price * 4.75) / 100;
    // nooooow this is for non groceries. they are taxed 4.75. So anything besides groceries will be returned with this function. */
}
