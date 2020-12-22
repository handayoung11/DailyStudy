Vue.config.devtools = true;
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

                <button @click="addToCart(true)" 
                        :disabled="!inStock"
						:class="{ disabledButton: !inStock }">Add to Cart</button>
				<button @click="addToCart(false)" 
						v-if="onCart != 0 && onCart != undefined"
						class="delete"
                        :class="{ disabledButton: !inStock }">Remove from Cart</button>
			</div>
			
			<div>
				<h2>Reviews</h2>
				<p v-if="!reviews.length"> There are no reviews yet.</p>
				<ul>
					<li v-for="review in reviews">
						<p>{{review.name}}</p>
						<p>Rating: {{review.rating}}</p>
						<p>{{review.review}}</p>
						<p>{{review.recommended}}</p>
					</li>
				</ul>
			</div>
			<product-review @review-submitted="addReview"></product-review>
        </div>
	`,
	props: {
		premium: {
			type: Boolean,
			required: true,
		},
		cart: {
			type: Array,
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
					variantQuantity: 3,
				},
			],
			reviews: [],
		};
	},
	methods: {
		addToCart(add) {
			// 현재 선택된 상품
			const variant = this.variants[this.selectedVariant];

			// 재고 없을 경우 장바구니 추가 불가능
			if (this.onCart == variant.variantQuantity && add) {
				alert("재고가 부족하여 더 이상 장바구니에 담을 수 없습니다");
				return;
			}

			// 장바구니에 추가하기
			this.$emit("add-to-cart", variant.variantId, add);
		},
		updateProduct(index) {
			this.selectedVariant = index;
		},
		addReview(productReview) {
			this.reviews.push(productReview);
		},
	},
	computed: {
		onCart() {
			// Cart에 있는 상품 개수
			return this.cart.filter(
				(word) => word == this.variants[this.selectedVariant].variantId
			).length;
		},
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

Vue.component("product-review", {
	template: `<form class="review-form" @submit.prevent="onSubmit">
		<p v-if="errors.length">
			<b>Please correct the following error(s):</b>
			<ul>
				<li v-for="error in errors">{{ error }}</li>
			</ul>
		</p>
		<p>
			<label for="name">Name:</label>
			<input id="name" v-model="name"/>
		</p>
		<p>
			<label for="review">Review:</label>
			<textarea id='review' v-model="review"/></textarea>
		</p>
		<p>
			<label for="rating">Rating:</label>
			<select id='rating' v-model.number='rating'>
				<option v-for='value in 5'>{{6 - value}}</option>
			</select>
		</p>
		<p>
			<b>Would you recommend this product?</b><br>
			<input id="yesRec" type="radio" name="recommend" class="recommend-radio" v-model="recommended" value="recommended"/>
			<label for="yesRec">Yes</label>
			<input id="noRec" type="radio" name="recommend" class="recommend-radio" v-model="recommended" value="not recommended"/>
			<label for="noRec">No</label>
		</p>
		<p>
			<input type="submit" value="Submit" />
		</p>
	</form>
	`,
	data() {
		return {
			name: null,
			review: null,
			rating: null,
			recommended: null,
			errors: [],
			required: ["name", "review", "rating", "recommended"],
		};
	},
	methods: {
		onSubmit() {
			const productReview = {};
			this.errors.length = 0;
			for (const key of this.required) {
				const data = this[key];
				if (!data) {
					this.errors.push(key + " required.");
					continue;
				}
				productReview[key] = data;
			}
			if (this.errors.length) return;
			for (const key of this.required) this[key] = null;
			this.$emit("review-submitted", productReview);
		},
	},
});
const app = new Vue({
	el: "#app",
	data: {
		cart: [],
		premium: true,
	},
	methods: {
		updateCart(id, add) {
			//add 모드일 경우 장바구니에 추가
			if (add) this.cart.push(id);
			// 아닐 경우 장바구니에서 삭제
			else {
				for (let i = 0; i < this.cart.length; i++)
					if (this.cart[i] == id) {
						this.cart.splice(i, 1);
						break;
					}
			}
		},
	},
});
