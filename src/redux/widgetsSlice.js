import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      shortId:"CSPM",
      widgets: [
        {
          id: 1,
          name: "Widget CSPM Executive 1",
          text: "Random text for widget CSPM Executive 1",
          visible: true,
        },
        {
          id: 2,
          name: "Widget CSPM Executive 2",
          text: "Random text for widget CSPM Executive 2",
          visible: true,
        },
        {
          id: 3,
          name: "Widget CSPM Executive 3",
          text: "Random text for widget CSPM Executive 3",
          visible: true,
        },
      ],
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      shortId:"CWPP",
      widgets: [
        {
          id: 1,
          name: "Widget CWPP 1",
          text: "Random text for widget CWPP 1",
          visible: true,
        },
        {
          id: 2,
          name: "Widget CWPP 2",
          text: "Random text for widget CWPP 2",
          visible: true,
        },
      ],
    },
    {
      id: 3,
      name: "Registry Scan",
      shortId:"Reg Scan",
      widgets: [
        {
          id: 1,
          name: "Widget Registry Scan 1",
          text: "Random text for widget Registry Scan 1",
          visible: true,
        },
        {
          id: 2,
          name: "Widget Registry Scan 2",
          text: "Random text for widget Registry Scan 2",
          visible: true,
        },
      ],
    },
  ],
};

const widgetsSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    updateCategories: (state, action) => {
      const copiedCategories = action.payload;
      state.categories = copiedCategories;
    },
    toggleWidget: (state, action) => {
      const { catIndx, widIndx } = action.payload;
      const category = state.categories[catIndx];
      if (category && category.widgets[widIndx].visible) {
        category.widgets[widIndx].visible = false;
      } else {
        category.widgets[widIndx].visible = true;
      }
    },
  },
});

export const { updateCategories, toggleWidget } =
  widgetsSlice.actions;
export default widgetsSlice.reducer;
