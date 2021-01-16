import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();
	return (
		<div className="payment">
			<div className="payment_container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>
					)
				</h1>
				{/* payment section - delivery address */}
				<div className="payment_section">
					<div className="payment_title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment_address">
						<p>{user?.email}</p>
						<p>ReactJS Street, 12</p>
						<p>Frankfurt, US</p>
					</div>
				</div>
				{/* payment section - review items */}
				<div className="payment_section">
					<div className="payment_title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment_items">
						{basket.map((item) => (
							<CheckoutProduct
								key={item.id}
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

				{/* payment section - payment method */}
				<div className="payment_section">
					<div className="payment_title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment_detail">
						{/* Stripe magic will do */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
