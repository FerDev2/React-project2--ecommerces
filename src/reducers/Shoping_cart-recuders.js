/*funcion reducer */
import TYPES from "../reducers/Types_Options";
import polo from "../IMG/polo1.jfif"

export const productsInitialState = {
  products: [
    {
      "id": 1,
      "name": "product 1",
      "price": 50,
      "img": "https://home.ripley.com.pe/Attachment/WOP_5/2005266857281/2005266857281_2.jpg"
    },
    {
      "id": 2,
      "name": "product 2",
      "price": 30,
      "img": "https://home.ripley.com.pe/Attachment/WOP_5/2005266857281/2005266857281_2.jpg"
    },
    {
      "id": 3,
      "name": "product 3",
      "price": 40,
      "img": "https://home.ripley.com.pe/Attachment/WOP_5/2005266857281/2005266857281_2.jpg"
    }
  ],
  cart: [],
  totalPriceShoppingCart: 0
}

export const reducerCart = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newProduct = state.products.find((product) => product.id === action.payload)
      return {
        ...state,
        cart: [...state.cart, newProduct]
      };
    }
    case TYPES.DELETE_PRODUCT_FROM_CART: {
        return {
          ...state,
          cart: state.cart.filter((product) => product.id !== action.payload)
        }
      }
    default:
      return state;
  }

  throw Error("Unknown action: " + action.type);
}