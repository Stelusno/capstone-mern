import { Product } from './types/Products';

export const sampleProducts: Product[] = [
    {
        name: 'Nike Slim Shirt', 
        slug: 'nike-slim-shirt',
        category: 'Shirts', 
        image: '../images/p1.jpg', 
        price: 30,
        countInStock: 4,
        brand: 'Nike', 
        rating: 4.5,
        description: 'cotton high quality shirt'
    }, 
    {
        name: 'Calvin Klein Shirt', 
        slug: 'calvin-klein-shirt',
        category: 'Shirts', 
        image: '../images/p2.jpg', 
        price: 40,
        countInStock: 3,
        brand: 'Calvin Klein', 
        rating: 5,
        description: 'modal high quality shirt'
    }, 
    {
        name: 'Adidas Fitted Shirt', 
        slug: 'adidas-fitted-shirt',
        category: 'Shirts', 
        image: '../images/p3.jpg', 
        price: 25,
        countInStock: 6,
        brand: 'Adidas', 
        rating: 3,
        description: 'cotton shirt'
    },
    {
        name: 'Adidas League Pants', 
        slug: 'adidas-league-pants',
        category: 'pants', 
        image: '../images/p4.jpg', 
        price: 45,
        countInStock: 20,
        brand: 'Adidas', 
        rating: 5,
        description: 'fitted quality track pants'
    },
    {
        name: 'Ralph Lauren Jeans', 
        slug: 'ra;ph-lauren-jeans',
        category: 'pants', 
        image: '../images/p5.jpg', 
        price: 60,
        countInStock: 4,
        brand: 'Ralph Lauren', 
        rating: 4.5,
        description: 'high quality denim jeans'
    }
]
