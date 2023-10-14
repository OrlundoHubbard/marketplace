const Stripe = require('stripe')
const products = require('/products')

const stripe = Stripe
('sk_test_51NzrBfCv8Frrm7haCOhSorAs4YH1QGZGiUHiFVJbMywxDajC7RM4bg6890CLTMsgUZZYxtGUvKUwjNGHByIy2R9q00sFn1FjAc')

(async () => {
    for (const products of products)
})()