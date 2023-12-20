import {loadStripe} from '@stripe/stripe-js'

const stripeKey = 'pk_test_51OIkgmJawUZGUNN3t0yu2bMZGZxM8M0PsTvRIfa2uteW4nFdHjfks95f3lRUfOePQaV59Z41nLjajAZwdw99At4H008lC9aAtm'

export const stripePromise = loadStripe(stripeKey)