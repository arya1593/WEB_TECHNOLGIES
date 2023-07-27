var app = angular.module('myApp', []);

app.controller('productController', function ($scope) {
    $scope.products = [
        {
            name: 'iPhone 14 Pro',
            price: 22317.00,
            offer: 'instant savings and No Cost EMI or ₹139900.00',
            img: '14.jpg'
        },
        {
            name: 'iPhone 13',
            price: 10983.00,
            offer: 'instant savings and No Cost EMI or ₹69900.00',
            img: '13.jpg'
        },
        {
            name: 'iPhone 12',
            price: 9650.00,
            offer: 'instant savings and No Cost EMI or ₹59900.00',
            img: '12.jpg'
        },
        {
            name: 'AirPods (3rd generation)',
            price: 3637.00,
            offer: 'with EMI or MRP ₹20900.00 (Incl. of all taxes)',
            img: '3.jpg'
        },
        {
            name: 'Apple Watch Ultra',
            price: 14483.00,
            offer: 'instant savings and No Cost EMI or ₹89900.00',
            img: 'watch.jpg'
        },
        {
            name: 'MacBook Air',
            price: 18650.00,
            offer: 'instant savings and No Cost EMI or MRP ₹119900.00 (Incl. of all taxes)',
            img: 'laptop.jpg'
        }
    ];

    $scope.cart = [];

    $scope.addToCart = function (product) {
        var found = false;
        for (var i = 0; i < $scope.cart.length; i++) {
            if ($scope.cart[i].name === product.name) {
                $scope.cart[i].quantity++;
                found = true;
                break;
            }
        }
        if (!found) {
            $scope.cart.push({
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }
    };
}
