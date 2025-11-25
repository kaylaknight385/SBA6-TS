export function calculateTax(price: number, taxRate: number): number {
  return price * (1 + taxRate / 100);
}
