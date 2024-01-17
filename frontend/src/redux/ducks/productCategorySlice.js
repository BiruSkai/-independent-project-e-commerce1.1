import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productCategories } from '../../api/indexPaths';

export const fetchProductCategories = createAsyncThunk("fetchProductCategories", async() => {
        const data = await productCategories();
        let categories = [];

        for (let i=0; i < data.length; i++){
                const product = ({name:data[i].category_name, id:data[i].id});
                categories.push(product);
        }     
  
        console.log('data: ' + categories);
        return categories;
      
});

const productCategory = createSlice({
        name: "productCategory",
        initialState: {
                data: "test",
                isLoading: false,
                isError: false
        },
        extraReducers: (builder) => {
                builder.addCase(fetchProductCategories.pending, (state, action) => {
                        state.isLoading = true;
                        state.isError = false;
                });
                builder.addCase(fetchProductCategories.fulfilled, (state, action) => {
                        state.isLoading = false;
                        state.isError = false;
                        state.data = action.payload;

                        console.log(`state.data in productCategorySlice: ${state.data}`)
                });
                builder.addCase(fetchProductCategories.rejected, (state, action) => {
                        state.isLoading = false;
                        state.isError = true;
                })
        }
})

export default productCategory.reducer;