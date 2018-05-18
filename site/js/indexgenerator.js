function indexspecialprice(param) {
    var contentholder = document.querySelector('.indexmainspecialpricebox');
    var index = Math.floor(Math.random() * 3);
    var specialPrice = [65, 75, 55];
    var price = [85, 95, 75];
    var pizzaName = ["Hawaii", "Kebab", "Margherita"];
    contentholder.innerHTML = '<div class="indexspecialpriceimagebox"><a href="./menu.html#' + pizzaName[index] + 'bg"><div class="indexspecialpriceimage" id="'+ pizzaName[index] + 'bg"></div></a></div><div class="indexspecialpriceinfobox"><div class="indexspecialpriceinfoheadlinebox"><h1 class="indexspecialpriceinfoheadline">Pizza ' + pizzaName[index] + ' nu för special pris!</h1></div><div class="indexspecialpriceinfopricebox"><p class="indexspecialpriceinfoprice"><a class="indexspecialogprice">' + price[index] + ' kr.</a> ' + specialPrice[index] + ' kr.</p></div></div>';
}

$(function() {
    indexspecialprice();
})