export interface Product{
    category: string;
    description: string;
    id: number,
    image: string;
    price: number;
    title: string;
    rating: Record<string, number>
    amount?: number
}

export interface Product2 {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}