import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"
const initialState = {
    posts:[],
    users:[],
    products:[],
    status:"idle",
    error:null
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async()=>{
    const response = await fetch(`https://dummyjson.com/products?limit=10`)
        .then(res => res.json());
    return response.products
})
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async()=>{
    const response = await fetch(`https://dummyjson.com/posts?limit=10`)
        .then(res => res.json());
        return response.posts
})
export const fetchUsers = createAsyncThunk("users/fetchUsers", async()=>{
    const response = await fetch(`https://dummyjson.com/users?limit=10`)
        .then(res => res.json());
        return response.users
})
const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succedded"
            state.products = action.payload;
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = "succedded"
            console.count("test")
            state.posts = action.payload;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = "succedded"
            state.users = action.payload;
        })
    }
})

export const getProducts = (state) => state.data.products
export const getPosts = (state) => state.data.posts
export const getUsers = (state) => state.data.users
export default postSlice.reducer