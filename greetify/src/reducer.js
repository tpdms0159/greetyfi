import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  
    cardDesignId: 0,
    season: 'None',
    emotional: [],
    age: [],
    dialect: 'None',
    words: []
};

const dataBox = createSlice({
    name: 'selects',
    initialState: {value: initialStateValue, ments: ""},
    reducers: {
        season: (state, action) => {
            state.value.season =  action.payload ;
        },
        cardDesign: (state, action) => {
            console.log(action.payload);
            state.value.cardDesignId = action.payload;
        },
        emotion: (state, action) => {
            state.value.emotional =  action.payload;
        },
        age: (state, action) => {
            state.value.age = action.payload;
        },
        word: (state, action) => {
            state.value.words = action.payload.current;
        },
        dialect: (state, action) => {
            state.value.dialect = action.payload;
        },
        ments: (state, action) => {
            state.ments = action.payload;
        },
        initial: (state) => {
            state.value = initialStateValue;
        }


    }
});

export const {season, cardDesign, emotion, age, word, dialect, ments, initial} = dataBox.actions;

export default dataBox;
