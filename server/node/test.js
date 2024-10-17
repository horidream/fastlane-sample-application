import "dotenv/config";

const {
	PAYPAL_API_BASE_URL = "https://api-m.sandbox.paypal.com", // use https://api-m.paypal.com for production environment
	PAYPAL_CLIENT_ID,
	PAYPAL_CLIENT_SECRET,
	PAYPAL_MERCHANT_ID,
	PAYPAL_BN_CODE,
} = process.env;

const auth = Buffer.from(
	`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`
).toString("base64");

console.log(auth);
