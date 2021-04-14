var products = new Array();
var sales = new Array(); // store emails

function addProduct(name, qty, price) {
    // create product
    var newProduct = {
        productName: name,
        quantity: qty,
        productPrice: price
    };

    // add product to array
    products.push(newProduct); 
}

function newProduct() {
    //var value = document.getElementById("<%=DropDownList1.ClientID%>");
    var value = document.getElementById('DropDownList1');
    var getvalue = value.options[value.selectedIndex].value;
    var pName = value.options[value.selectedIndex].text;  

    var qty = document.getElementById('QuantityTextBox').value;
    var price = document.getElementById('PriceTextBox').value;

    if (pName == "Select item...") {
        alert("Please select a product from dropdown.");
        return;
    } 

    if (qty === "" || price === null) {
        alert("Please enter all product details.");
        return;
    }

     addProduct(pName, qty, price);

    // reset fields
    document.getElementById('DropDownList1').selectedIndex = 0;
    document.getElementById('QuantityTextBox').value = "";
    document.getElementById('PriceTextBox').value = "";

    //  show arlet that product is added
    alert(pName + " is Added to Stock.");

    // list products
    listProducts();
    updateStats();
}


function listProducts() {
    document.getElementById('productsList').innerHTML = '';
    var table = '<table class="products_table"> <tr>'
        + ' <td> <label>No</label></td>'
        + ' <td> <label>Product Name</label></td>'
        + ' <td> <label>Qty</label></td>'
        + ' <td> <label>Price</label></td>'
        + '</tr>';
    products.forEach(myFunction);

    function myFunction(product, index) {
        table += '<tr> <td> <label>'+(index + 1) + '</label></td>'
            + '<td> <label>' + product.productName + '</label></td>'
            + '<td> <label>' + product.quantity + '</label></td>'
            + '<td> <label> R' + product.productPrice + '</label></td> </tr>'; 
    }

    document.getElementById('productsList').innerHTML = table + '</table>';
}

function newSale(email, productName, qty) {
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
            var response = document.getElementById('removeResponse');
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
       sales.push(email);
       var curP = products[foundProdName];
        if ((curP.quantity - qty) === 0) {
            produts.splice(foundProdName, 1);
        }
        if ((curP.quantity - qty) > 0) {
            curP.quantity -= qty;
        }

        // reset fields
        document.getElementById('DropDownList2').selectedIndex = 0;
        document.getElementById('emailTxtB').value = "";
        document.getElementById('qtyTxtB2').value = "";

        // list products
        listProducts();
        return;
    } else {
        removeResponse.innerHTML =  productName + " is not in STOCK.";
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
            p1Qty += parseInt(product.quantity);
            p1Sum += parseInt(product.productPrice);
            p1Count ++;
        }
    } 

    var p2Qty = 0;
    var p2Sum = 0;
    var p2Count = 0;
    products.forEach(prod2Qty);
    function prod2Qty(product, index) {
        if (product.productName === "PRODUCT2") {
            p2Qty += parseInt(product.quantity);
            p2Sum += parseInt(product.productPrice);
            p2Count++;
        }
    }

    var p3Qty = 0;
    var p3Sum = 0;
    var p3Count = 0;
    products.forEach(prod3Qty);
    function prod3Qty(product, index) {
        if (product.productName === "PRODUCT3") {
            p3Qty += parseInt(product.quantity);
            p3Sum += parseInt(product.productPrice);
            p3Count++;
        }
    }

    if (p1Count > 0) {
        product1.innerHTML = 'PRODUCT1 :-  Quantity: ' + p1Qty + '\t  Price Average: R' + parseFloat((p1Sum / p1Count)).toFixed(2) + '<br/>';
    }
    if (p2Count > 0) {
        product2.innerHTML = 'PRODUCT2 :-  Quantity: ' + p2Qty + '\t  Price Average: R' + parseFloat((p2Sum / p2Count)).toFixed(2) + '<br/>';
    }
    if (p3Count > 0) {
        product3.innerHTML = 'PRODUCT3 :-  Quantity: ' + p3Qty + '\t  Price Average: R' + parseFloat((p3Sum / p3Count)).toFixed(2);
    }
    
}