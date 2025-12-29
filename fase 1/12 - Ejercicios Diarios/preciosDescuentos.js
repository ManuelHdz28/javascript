const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    const discountAmount = (originalPrice * discountPercentage) / 100; // calcula el monto del descuento
    const finalPrice = originalPrice - discountAmount; // calcula el precio final después del descuento
    return finalPrice; // devuelve el precio final
}

// Example usage:
const originalPrice = 100; // precio original
const discountPercentage = 10; // porcentaje de descuento
const discountedPrice = calculateDiscountedPrice(originalPrice, discountPercentage); // calcula el precio con descuento
console.log(`Original Price: $${originalPrice}`);  // muestra el precio original
console.log(`Discount Percentage: ${discountPercentage}%`); // muestra el porcentaje de descuento
console.log(`Discounted Price: $${discountedPrice}`); // muestra el precio con descuento