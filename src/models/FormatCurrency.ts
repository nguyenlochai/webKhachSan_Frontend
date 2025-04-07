export function FormatCurrency(amount: number | null | undefined): string {
    return amount ? amount.toLocaleString('vi-VN') + ' ₫' : '0 ₫';
}