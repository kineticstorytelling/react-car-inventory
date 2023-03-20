import {createSlice} from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make:"Make",
        model:"Model",
        color: "Color",
        year: "Year",

        // name:"Name",
        // email: "Email",
        // phone_number: "Phone Number",
        // address: "Address"
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseColor: (state, action) => { state.color = action.payload },
        chooseYear: (state, action) => { state.year = action.payload }


        // chooseName: (state,action)=>{ state.name = action.payload },
        // chooseEmail: (state, action) => { state.email = action.payload },
        // choosePhone: (state, action) => { state.phone_number = action.payload },
        // chooseAddress: (state, action) => { state.address = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseColor, chooseYear } = rootSlice.actions;
// export const { chooseName, chooseAddress, chooseEmail, choosePhone} = rootSlice.actions;


// make, model, year, color