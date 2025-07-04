import mongoose from "mongoose";

// Define the schema for individual reviews
const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // --- CRUCIAL FIX: Changed from 'User' to 'user' ---
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    offerPrice: {
        type: Number,
        required: true,
    },
    image: {
        type: [String],
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
    weight: {
        type: String,
        required: false,
    },
    reviews: [reviewSchema],
    averageRating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

const Product = mongoose.models.product || mongoose.model("Product", productSchema);

export default Product;
