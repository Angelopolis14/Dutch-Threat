import { Component } from "@angular/core";

@Component({
    selector: "product-list",
    templateUrl: "productListView.component.html"
})
export default class ProductListView {
    public products = [{
        title: "Nike Air Force 1",
        price: "2000.00"
    }, {
        title: "Jordan 4",
        price: "5000.00"
    }];
}