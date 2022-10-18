import { useLocalStorage } from "hooks/useLocalStorage";
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
  quantities: ProductQuantity;
  handleIncreaseQuantity: (item: Product) => void;
};
export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

type CartContextProps = {
  children: ReactNode;
};

type ProductQuantity = Record<number, number>;

const CartProvider = ({ children }: CartContextProps) => {
  const [cartToggle, setCartToggle] = useState(false);
  const [quantities, setQuantities] = useState<ProductQuantity>({});
  const [cartProducts, setCartProducts] = useLocalStorage<Product[]>(
    "shopping-cart",
    []
  );

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
        : setCartProducts((prevState) => [...prevState, product]);

      setQuantities((prevState) => ({
        ...prevState,
        [product.id]: 1, // ustawiennie stanu poczatkowego dla quantities
      }));

      // Alernative way to check if in cart
      // const hasCartItems = cartProducts.some((item) => item.id === product.id);

      // const productsToBeAdded = hasCartItems
      //   ? filteredCartItems
      //   : [...cartProducts, product];
      // setCartProducts(productsToBeAdded);
    },
    [cartProducts, setCartProducts]
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

  const handleIncreaseQuantity = useCallback(
    (product: Product) => {
      const currentProduct = cartProducts.find(
        (item) => item.id === product.id
      );
      if (!currentProduct) return;

      setQuantities((prevState) => ({
        ...prevState,
        [currentProduct.id]: prevState[currentProduct.id] + 1,
        // ? prevState[currentProduct.id] + 1
        // : 2,
      }));
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
      handleIncreaseQuantity,
      quantities,
    }),
    [
      addToCart,
      cartProducts,
      cartToggle,
      handleToggleOpenCartSidebar,
      checkIsAlreadyAdded,
      addToCartText,
      handleIncreaseQuantity,
      quantities,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
