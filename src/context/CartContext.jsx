import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/action/product/productAction"; // Ensure this action is defined and imported
import {
  selectProducts,
  selectLoading,
  selectError,
  selectPagination
} from "@/redux/action/product/productSelectors";
import { openCartModal } from "@/utlis/openCartModal";
import { openWistlistModal } from "@/utlis/openWishlist";
import { selectCategories, selectCategoryLoading, selectCategoryError } from "@/redux/action/category/categorySelectors";
import { fetchCategory } from "@/redux/action/category/categoryAction";

const dataContext = React.createContext();

export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const dispatch = useDispatch();

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

  // Fetch products when the component mounts
  // useEffect(() => {
  //   dispatch(fetchProducts());
  //   dispatch(fetchCategory())
  // }, [dispatch]);

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
  const isAddedToCartProducts = (id) => {
    return cartProducts.some((elm) => elm.id === id);
  };

  // Add a product to the cart using product data from the API response
  const addProductToCart = (id, qty, isModal = true) => {
    if (!isAddedToCartProducts(id)) {
      const product = products.find((elm) => elm.id === id);
      if (product) {
        const item = { ...product, quantity: qty ? qty : 1 };
        setCartProducts((prev) => [...prev, item]);
        if (isModal) {
          openCartModal();
        }
      }
    }
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (id, qty) => {
    if (isAddedToCartProducts(id)) {
      const updatedItems = cartProducts.map((item) =>
        item.id === id ? { ...item, quantity: Number(qty) } : item
      );
      setCartProducts(updatedItems);
    }
  };

  // Wishlist functions
  const addToWishlist = (id) => {
    if (!wishList.includes(id)) {
      setWishList((prev) => [...prev, id]);
      openWistlistModal();
    }
  };

  const removeFromWishlist = (id) => {
    setWishList((prev) => prev.filter((elm) => elm !== id));
  };

  const isAddedtoWishlist = (id) => wishList.includes(id);

  // Compare item functions
  const addToCompareItem = (id) => {
    if (!compareItem.includes(id)) {
      setCompareItem((prev) => [...prev, id]);
    }
  };

  const removeFromCompareItem = (id) => {
    setCompareItem((prev) => prev.filter((elm) => elm !== id));
  };

  const isAddedtoCompareItem = (id) => compareItem.includes(id);

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
  const contextElement = {
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
  };

  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}