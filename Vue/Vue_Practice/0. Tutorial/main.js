Vue.component("product", {
	template: `
	<div class="product">
            <div class="product-image">
                <img :src="image">
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-if="inStock">In Stock</p>
				<p v-else :style="!inStock?'text-decoration:line-through': ''">Out of Stock</p>
				<p>Shipping: {{premium?'free':'$2.99'}}</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div v-for="(variant, index) in variants"
                 :key="variant.variantId"
                 class="color-box"
                 :style="{backgroundColor: variant.variantColor}"
                 @mouseover="updateProduct(index)">
                </div>

                <button @click="addToCart(1)" 
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }">Add to Cart</button>
                <div class="cart">
                    <p>Cart({{cart}})</p>
                </div>
            </div>
        </div>
	`,
	props: {
		premium: {
			type: Boolean,
			required: true,
		},
	},
	data() {
		return {
			brand: "Vue Mastery",
			product: "Socks",
			selectedVariant: 0,
			details: ["80% cotton", "20% polyester", "Gender-neutral"],
			variants: [
				{
					variantId: 2234,
					variantColor: "green",
					variantImage: "./assets/vmSocks-green.jpg",
					variantQuantity: 10,
				},
				{
					variantId: 2235,
					variantColor: "blue",
					variantImage: "./assets/vmSocks-blue.jpg",
					variantQuantity: 0,
				},
			],
			cart: 0,
		};
	},
	methods: {
		addToCart(count) {
			this.cart = Math.max(this.cart + count, 0);
		},
		updateProduct(index) {
			this.selectedVariant = index;
		},
	},
	computed: {
		title() {
			return this.brand + " " + this.product;
		},
		image() {
			return this.variants[this.selectedVariant].variantImage;
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity;
		},
	},
});
const app = new Vue({
	el: "#app",
	data: {
		premium: false,
	},
});
