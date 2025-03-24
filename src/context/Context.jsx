import React, { useEffect, useState, useContext, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/action/product/productAction"; // Ensure this action is defined and imported
import { selectProducts, selectLoading, selectError, selectPagination } from "@/redux/action/product/productSelectors";
import { openCartModal } from "@/utlis/openCartModal";
import { openWistlistModal } from "@/utlis/openWishlist";
import { selectCategories, selectCategoryLoading, selectCategoryError } from "@/redux/action/category/categorySelectors";
import { fetchCategory } from "@/redux/action/category/categoryAction";
import { getCart, addToCart, removeFromCart } from "@/redux/action/cart/cartAction"

const dataContext = React.createContext();

export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart) || {};
  // console.log("1] ITEMs----\v\n", items);
  

  // Local state
  const [cartProducts, setCartProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [compareItem, setCompareItem] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [quickAddItem, setQuickAddItem] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // API-derived state via Redux selectors
  const categories = useSelector(selectCategories);
  const Categoryloading = useSelector(selectCategoryLoading);
  const Categoryerror = useSelector(selectCategoryError);

  const products = useSelector(selectProducts) || [];
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const pagination = useSelector(selectPagination);


  useEffect(() => {
    dispatch(getCart());
    dispatch(fetchProducts());
    dispatch(fetchCategory());
  }, [dispatch]);

  // Sync cartProducts from Redux items and products details
  useEffect(() => {
    // Ensure items is an array; if not, default to an empty array
    const cartItems = Array.isArray(items) ? items : [items];
    // console.log("2] cartItems----\v\n", cartItems);
    
    if (cartItems.length && products.length) {
      const updatedCartProducts = cartItems
        .map((item) => {
          const product = products.find((prod) => prod.id === item.product_id);
          if (product) {
            return {
              ...product,
              cartId: item.id,
              quantity: item.qty,
            };
          }
          return null;
        })
        .filter(Boolean);
      // console.log("[2.1 updatedCartProducts----\v\n", updatedCartProducts);
      
      setCartProducts(updatedCartProducts);
    }
    // console.log("3] cartProducts----\v\n", cartProducts);
    
  }, [items, products]);

  // console.log("cartProducts-->", cartProducts);
  

  // Set initial quick view item once products are loaded
  useEffect(() => {
    if (products.length > 0 && !quickViewItem) {
      setQuickViewItem(products[0]);
    }
  }, [products, quickViewItem]);

  // Calculate total price for cart products
  useEffect(() => {
    const subtotal = cartProducts.reduce((acc, product) => {
      return acc + product.quantity * Number(product.discount_price);
    }, 0);
    setTotalPrice(subtotal);
  }, [cartProducts]);

  // Check if a product is already added to the cart
  const isAddedToCartProducts = useCallback(
    (id) => {
      if (cartProducts) {
        return cartProducts?.some((elm) => elm.id === id);
      }
    },
    [cartProducts]
  );

  // Add a product to the cart using product data from the API response
  const addProductToCart = useCallback(
    (id, qty = 1, isModal = true) => {
      if (!isAddedToCartProducts(id)) {
        dispatch(addToCart(id, qty));
        const product = products.find((elm) => elm.id === id);
        if (product) {
          const item = { ...product, quantity: qty };
          setCartProducts((prev) => [...prev, item]);
          if (isModal) {
            openCartModal();
          }
        }
      }
    },
    [isAddedToCartProducts, dispatch, products]
  );

  // Update the quantity of a product in the cart
  const updateQuantity = useCallback(
    (id, qty) => {
      if (isAddedToCartProducts(id)) {
        const updatedItems = cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: Number(qty) } : item
        );
        setCartProducts(updatedItems);
      }
    },
    [isAddedToCartProducts, cartProducts]
  );

  // Wishlist functions
  const addToWishlist = useCallback(
    (id) => {
      if (!wishList.includes(id)) {
        setWishList((prev) => [...prev, id]);
        openWistlistModal();
      }
    },
    [wishList]
  );

  const removeFromWishlist = useCallback(
    (id) => {
      setWishList((prev) => prev.filter((elm) => elm !== id));
    },
    []
  );

  const isAddedtoWishlist = useCallback(
    (id) => wishList.includes(id),
    [wishList]
  );

  // Compare item functions
  const addToCompareItem = useCallback(
    (id) => {
      if (!compareItem.includes(id)) {
        setCompareItem((prev) => [...prev, id]);
      }
    },
    [compareItem]
  );

  const removeFromCompareItem = useCallback(
    (id) => {
      setCompareItem((prev) => prev.filter((elm) => elm !== id));
    },
    []
  );

  const isAddedtoCompareItem = useCallback(
    (id) => compareItem.includes(id),
    [compareItem]
  );

  // Persist cart and wishlist in localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartList"));
    if (storedCart?.length) {
      setCartProducts(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (storedWishlist?.length) {
      setWishList(storedWishlist);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  useEffect(() => {
    const storedCompareItem = JSON.parse(localStorage.getItem("compareItem"));
    if (storedCompareItem?.length) {
      setCompareItem(storedCompareItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("compareItem", JSON.stringify(compareItem));
  }, [compareItem]);

  // Build the context element
  const contextValue = useMemo(() => ({
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,
    removeFromWishlist,
    addToWishlist,
    isAddedtoWishlist,
    quickViewItem,
    wishList,
    setQuickViewItem,
    quickAddItem,
    setQuickAddItem,
    addToCompareItem,
    isAddedtoCompareItem,
    removeFromCompareItem,
    compareItem,
    setCompareItem,
    updateQuantity,
    products,
    loading,
    error,
    pagination,
    categories,
    Categoryloading,
    Categoryerror
  }), [
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,
    removeFromWishlist,
    addToWishlist,
    isAddedtoWishlist,
    quickViewItem,
    wishList,
    setQuickViewItem,
    quickAddItem,
    setQuickAddItem,
    addToCompareItem,
    isAddedtoCompareItem,
    removeFromCompareItem,
    compareItem,
    setCompareItem,
    updateQuantity,
    products,
    loading,
    error,
    pagination,
    categories,
    Categoryloading,
    Categoryerror
  ]);


  return (
    <dataContext.Provider value={contextValue}>
      {children}
    </dataContext.Provider>
  );
}

