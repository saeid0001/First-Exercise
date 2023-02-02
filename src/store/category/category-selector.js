import { createSelector } from 'reselect'

export const selectorReducer = ( state ) => {
  console.log("Fire 1");
 return state.category
} ;

export const selectorCategory = createSelector(
  [selectorReducer] ,
  (categorySlice) => {
    console.log("Fire 2");
    return categorySlice.category
  }
)

export const selectContex = createSelector(
  [selectorCategory]
  ,
  (category) => {
    console.log("Fire 3");
    return category.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {});
  }
)