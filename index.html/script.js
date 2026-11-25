// 當下拉選單改變時，更新顯示的單價
function updatePriceDisplay() {
    let price = document.getElementById("productSelect").value;
    document.getElementById("unitPriceDisplay").innerText = "HKS " + price;
}

// 當在產品卡片點擊「選購」時，自動把下方的選單切換過去
function selectProduct(price) {
    let select = document.getElementById("productSelect");
    select.value = price; // 改變下拉選單的值
    updatePriceDisplay(); // 更新顯示單價
    
    // 自動滾動到訂單計算區
    document.getElementById("order").scrollIntoView({ behavior: 'smooth' });
}

// 核心計算函數 (對應評分標準第10項)
function calculateTotal() {
    let price = parseInt(document.getElementById("productSelect").value); 
    let quantity = parseInt(document.getElementById("quantityInput").value); 
    let resultElement = document.getElementById("resultDisplay");

    if (isNaN(quantity) || quantity < 1) {
        resultElement.style.color = "red"; 
        resultElement.innerText = "請輸入有效的數量 (最少 1 件)";
        return;
    }

    let total = price * quantity;
    resultElement.style.color = "#28a745"; 
    resultElement.innerText = "您選擇了 " + quantity + " 件，總金額為：HKS " + total;
}