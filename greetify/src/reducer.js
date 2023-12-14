import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  
    cardDesignId: 0,
    season: 'None',
    emotional: [],
    age: 'None',
    dialect: 'None',
    word: []

    
};

const dataBox = createSlice({
    name: 'selects',
    initialState: {value: initialStateValue},
    reducers: {
        season: (state, action) => {
            state.value.season =  action.payload ;
        },
        cardDesign: (state, action) => {
            state.value.cardDesignId = action.payload.current;
        },
        emotion: (state, action) => {
            state.value.emotional =  action.payload;
        },
        age: (state, action) => {
            state.value.age = action.payload;
        },
        word: (state, action) => {
            state.value.word = action.payload;
        },
        dialect: (state, action) => {
            state.value.dialect = action.payload;
        }


    }
});

export const {season, cardDesign, emotion, age, word, dialect} = dataBox.actions;

export default dataBox;
