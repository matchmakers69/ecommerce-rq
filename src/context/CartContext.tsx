import {
  ReactNode,
  createContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import { Product } from "types/products";

type CartContextType = {
  cartToggle: boolean;
  handleToggleOpenCartSidebar: () => void;
  cartProducts: Product[];
  addToCart: (item: Product) => void;
  checkIsAlreadyAdded: (product: Product) => boolean;
  addToCartText: (product: Product) => string;
};
export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

type CartContextProps = {
  children: ReactNode;
};

const CartProvider = ({ children }: CartContextProps) => {
  const [cartToggle, setCartToggle] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const handleToggleOpenCartSidebar = useCallback(() => {
    setCartToggle(!cartToggle);
  }, [cartToggle]);

  const addToCart = useCallback(
    (product: Product) => {
      const filteredCartItems = cartProducts.filter(
        (item) => item.id !== product.id
      );
      cartProducts.findIndex((item) => item.id === product.id) >= 0
        ? setCartProducts(filteredCartItems)
        : setCartProducts([...cartProducts, product]);

      // Alernative way to check if in cart
      // const hasCartItems = cartProducts.some((item) => item.id === product.id);

      // const productsToBeAdded = hasCartItems
      //   ? filteredCartItems
      //   : [...cartProducts, product];
      // setCartProducts(productsToBeAdded);
    },
    [cartProducts]
  );

  const addToCartText = useCallback(
    (product: Product) => {
      const isAlreadyInCart = cartProducts.some(
        (item) => item.id === product.id
      );
      if (isAlreadyInCart) {
        return "Remove from Cart";
      } else {
        return "Add to Cart";
      }
    },
    [cartProducts]
  );

  // Disable button Add to cart - we check here if already added to cart
  const checkIsAlreadyAdded = useCallback(
    (product: Product) => {
      const isAdded = cartProducts.find((item) => item.id === product.id);
      return !!isAdded;
    },
    [cartProducts]
  );

  const value = useMemo(
    () => ({
      cartToggle,
      handleToggleOpenCartSidebar,
      cartProducts,
      addToCart,
      checkIsAlreadyAdded,
      addToCartText,
    }),
    [
      addToCart,
      cartProducts,
      cartToggle,
      handleToggleOpenCartSidebar,
      checkIsAlreadyAdded,
      addToCartText,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
