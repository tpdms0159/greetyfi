import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  
    cardDesignId: 0,
    season: 'None',
    emotional: [],
    age: [],
    dialect: 'None',
    word: []
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
            state.value.word = action.payload.current;
        },
        dialect: (state, action) => {
            state.value.dialect = action.payload;
        },
        ments: (state, action) => {
            state.ments = action.payload;
        }


    }
});

export const {season, cardDesign, emotion, age, word, dialect, ments} = dataBox.actions;

export default dataBox;
