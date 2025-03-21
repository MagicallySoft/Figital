export const getLocalCart = () => {
    try {
      return JSON.parse(localStorage.getItem("cartList")) || [];
    } catch {
      return [];
    }
  };
  
  export const setLocalCart = (cart) => {
    localStorage.setItem("cartList", JSON.stringify(cart));
  };
  
  export const removeLocalCart = () => {
    localStorage.removeItem("cartList");
  };
  