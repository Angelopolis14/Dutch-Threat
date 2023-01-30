import { ShopPage } from "../pages/shopPage.component";
import { Checkout } from "../pages/checkout.component";

const routes = [
    { path: "", component: ShopPage },
    { path: "checkout", component: Checkout}
];

export default router;