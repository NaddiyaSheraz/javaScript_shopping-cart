
function getRecipt() {
    // Get the item prices and quantities
    let Item_1_Price = parseInt(document.getElementById('item1').value);
    let Item_2_Price = parseInt(document.getElementById('item2').value);

    let quantityOfItem1 = parseInt(document.getElementById('item1quent').value);
    let quantityOfItem2 = parseInt(document.getElementById('item2quent').value);

    let ShippingCharges = parseInt(document.getElementById('shepingp').value);

    // Calculate totals for each item
    var totalitem1 = Item_1_Price * quantityOfItem1;
    var totalitem2 = Item_2_Price * quantityOfItem2;

    // Display the results in the respective divs
    document.getElementById('totalitem1').textContent = `Item 1: Rs ${totalitem1}`;
    document.getElementById('totalitem2').textContent = `Item 2: Rs ${totalitem2}`;
    document.getElementById('ShippingCharges').textContent = `Shipping Charges: Rs ${ShippingCharges}`;

    // Calculate and display the final total price
    var result = totalitem1 + totalitem2 + ShippingCharges;
    document.getElementById('totalPrice').textContent = `Total price: Rs ${result}`;
}
