export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat("en-UK", {
        style: "currency", currency: "EUR"
    }).format(quantity);
}