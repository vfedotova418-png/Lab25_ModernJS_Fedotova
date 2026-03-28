const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
    let amount = document.getElementById("amount").value;
    let currency = document.getElementById("currency").value;
    if (amount === "" || amount === null || amount === "0") {
        result.textContent = "Ошибка: Некорректная сумма"
    } else {
        if (currency === "EUR") {
            result.textContent = `Итог: ${(amount * 0.0107).toFixed(4)} ${currency}`;
        }
        if (currency === "USD") {
            result.textContent = `Итог: ${(amount * 0.0123).toFixed(4)} ${currency}`;
        }
    }
});