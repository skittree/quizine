import { createSlice } from "@reduxjs/toolkit"

export const colorSlice = createSlice({
    name: "color",
    initialState: {
        color: "aliceblue"
    },
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { changeColor } = colorSlice.actions

export default colorSlice.reducer