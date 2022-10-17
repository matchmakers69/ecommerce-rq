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

  const value = useMemo(
    () => ({
      cartToggle,
      handleToggleOpenCartSidebar,
      cartProducts,
    }),
    [cartProducts, cartToggle, handleToggleOpenCartSidebar]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
