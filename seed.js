const Stripe = require('stripe')
const products = require('./products')

const stripe = Stripe
('sk_test_51NzrBfCv8Frrm7haCOhSorAs4YH1QGZGiUHiFVJbMywxDajC7RM4bg6890CLTMsgUZZYxtGUvKUwjNGHByIy2R9q00sFn1FjAc');

(async () => {
    for (const product of products) {
        const stripeProduct = await stripe.products.create({
            name: products.name,
            default_price_data: {
                currency: products.currency, 
                unit_amount_decimal: products.price,
            },
            images: [product.image]
        });
        console.log(stripeProduct.name, ":", stripeProduct.id)
    }
})()