var products = new Array();
var sales = new Array(); // store emails
function addProduct(name, qty, price) {
    // create product
    var newProduct;
    newProduct = {
        productName: name,
        quantity: qty,
        productPrice: price
    };
    // add product to array
    products.push(newProduct);
}
function addNewProduct() {
    var prodDropDownList = document.getElementById('DropDownList1');
    var selIndex = prodDropDownList.selectedIndex;
    var pName = prodDropDownList.options[selIndex].text;
    var qty = parseFloat(document.getElementById('QuantityTextBox').value);
    var price = parseFloat(document.getElementById('PriceTextBox').value);
    if (pName == "Select item...") {
        alert("Please select a product from dropdown.");
        return;
    }
    if (isNaN(qty) || isNaN(price)) {
        alert("Please enter all product details.");
        return;
    }
    addProduct(pName, qty, price);
    // reset fields
    prodDropDownList.selectedIndex = 0;
    document.getElementById('QuantityTextBox').value = "";
    document.getElementById('PriceTextBox').value = "";
    // list products
    listProducts();
    //  show arlet that product is added
    alert(pName + " is Added to Stock.");
    updateStats();
}
function listProducts() {
    document.getElementById('productsList').innerHTML = '';
    var table = '<table class="products_table"> <tr>'
        + ' <td> <h4>No</h4></td>'
        + ' <td> <h4>Product Name</h4></td>'
        + ' <td> <h4>Qty</h4></td>'
        + ' <td> <h4>Price</h4></td>'
        + '</tr>';
    products.forEach(myFunction);
    function myFunction(product, index) {
        table += '<tr> <td> <label>' + (index + 1) + '</label></td>'
            + '<td> <label>' + product.productName + '</label></td>'
            + '<td> <label>' + product.quantity + '</label></td>'
            + '<td> <label> R' + product.productPrice + '</label></td> </tr>';
    }
    document.getElementById('productsList').innerHTML = table + '</table>';
}
function newSale(email, productName, qty) {
    var removeResponse = document.getElementById('removeResponse');
    removeResponse.innerHTML = '';
    var salesCount = sales.length;
    var foundEmail = -1;
    var foundProdName = -1;
    if (salesCount > 0) {
        // look for email
        sales.forEach(getEmail);
        function getEmail(custEmail, index) {
            if (custEmail === email) {
                foundEmail = index;
            }
        }
        // if found arlert user
        if (foundEmail > 0) {
            removeResponse.innerHTML = " Email (" + email + ") already exist. Try a new email.";
            return;
        }
    }
    products.forEach(getProduct);
    function getProduct(product, index) {
        if (product.productName === productName) {
            foundProdName = index;
        }
    }
    if (foundProdName > -1) {
        var emailTxtB = document.getElementById('emailTxtB').value;
        var priceTxtxB = document.getElementById('qtyTxtB2').value;
        if (emailTxtB !== "" && priceTxtxB !== "") {
            var curP = products[foundProdName];
            if ((curP.quantity - qty) === 0) {
                products.splice(foundProdName, 1);
                sales.push(email);
                listProducts();
                updateStats();
                removeResponse.innerHTML = productName + " is SOLD-OUT: ";
                return;
            }
            if ((curP.quantity - qty) > 0) {
                curP.quantity -= qty;
                sales.push(email);
                listProducts();
                updateStats();
                removeResponse.innerHTML = productName + " is sold to customer with email: " + email;
            }
            else {
                removeResponse.innerHTML = "WE have fewer items than that in STOCK: ";
            }
        }
        // reset fields
        var prodDrpDown = document.getElementById('DropDownList2');
        prodDrpDown.selectedIndex = 0;
        emailTxtB = "";
        priceTxtxB = "";
        // list products
        listProducts();
        updateStats();
        return;
    }
    else {
        removeResponse.innerHTML = productName + " is not in STOCK.";
    }
}
function sellProduct() {
    var custEmail = document.getElementById('emailTxtB').value;
    var prodDpD = document.getElementById('DropDownList2');
    var prodName = prodDpD.options[prodDpD.selectedIndex].text;
    var quantity = document.getElementById('qtyTxtB2').value;
    newSale(custEmail, prodName, quantity);
    updateStats();
}
function updateStats() {
    var product1 = document.getElementById('prod1');
    var product2 = document.getElementById('prod2');
    var product3 = document.getElementById('prod3');
    var p1Qty = 0;
    var p1Sum = 0;
    var p1Count = 0;
    products.forEach(prod1Qty);
    function prod1Qty(product, index) {
        if (product.productName === "PRODUCT1") {
            p1Qty += product.quantity;
            p1Sum += product.productPrice;
            p1Count++;
        }
    }
    var p2Qty = 0;
    var p2Sum = 0;
    var p2Count = 0;
    products.forEach(prod2Qty);
    function prod2Qty(product, index) {
        if (product.productName === "PRODUCT2") {
            p2Qty += product.quantity;
            p2Sum += product.productPrice;
            p2Count++;
        }
    }
    var p3Qty = 0;
    var p3Sum = 0;
    var p3Count = 0;
    products.forEach(prod3Qty);
    function prod3Qty(product, index) {
        if (product.productName === "PRODUCT3") {
            p3Qty += product.quantity;
            p3Sum += product.productPrice;
            p3Count++;
        }
    }
    if (p1Count > 0) {
        product1.innerHTML = 'PRODUCT1 :-  Quantity: ' + p1Qty + '\t  Price Average: R' + (p1Sum / p1Count).toFixed(2) + '<br/>';
    }
    if (p2Count > 0) {
        product2.innerHTML = 'PRODUCT2 :-  Quantity: ' + p2Qty + '\t  Price Average: R' + (p2Sum / p2Count).toFixed(2) + '<br/>';
    }
    if (p3Count > 0) {
        product3.innerHTML = 'PRODUCT3 :-  Quantity: ' + p3Qty + '\t  Price Average: R' + (p3Sum / p3Count).toFixed(2);
    }
}
//# sourceMappingURL=myTypeScript.js.map