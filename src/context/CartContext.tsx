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
  // handleIncreaseQuantity: (item: Product) => void;
  handleIncreaseQuantity: (id: number) => void;
  handleDecreaseQuantity: (id: number) => void;
  handleQuantityChange: (id: number, value: number) => void;
};
export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

type CartContextProps = {
  children: ReactNode;
};

type ProductQuantity = Record<string, number>;

const CartProvider = ({ children }: CartContextProps) => {
  const [cartToggle, setCartToggle] = useState(false);
  // const [quantities, setQuantities] = useState<ProductQuantity>({});
  const [quantities, setQuantities] = useLocalStorage<ProductQuantity>(
    "quantities",
    {}
  );
  const [cartProducts, setCartProducts] = useLocalStorage<Product[]>(
    "shopping-cart",
    []
  );

  const handleToggleOpenCartSidebar = useCallback(
    () => setCartToggle((prevState) => !prevState),
    []
  );
  // Dodanie do karty kiedy nie ma quantity
  // const addToCart = useCallback(
  //   (product: Product) => {
  //     const filteredCartItems = cartProducts.filter(
  //       (item) => item.id !== product.id
  //     );
  //     cartProducts.findIndex((item) => item.id === product.id) >= 0
  //       ? setCartProducts(filteredCartItems)
  //       : setCartProducts((prevState) => [
  //           ...prevState,
  //           { ...product, quantity: 1 },
  //         ]);
  //     // ustawiennie stanu poczatkowego dla quantities, w momencie kiedy nie ma quantity w tablicy produktow
  //     setQuantities((prevState) => ({
  //       ...prevState,
  //       [product.id]: 1,
  //     }));

  //     // Alernative way to check if in cart
  //     // const hasCartItems = cartProducts.some((item) => item.id === product.id);

  //     // const productsToBeAdded = hasCartItems
  //     //   ? filteredCartItems
  //     //   : [...cartProducts, product];
  //     // setCartProducts(productsToBeAdded);
  //   },
  //   [cartProducts, setCartProducts, setQuantities]
  // );

  // Tablica cartProducts rozszerzona o quantity
  const addToCart = useCallback(
    (product: Product) => {
      const isAlreadyAdded = cartProducts.some(
        (item) => item.id === product.id
      );

      isAlreadyAdded
        ? setCartProducts((prevState) =>
            prevState.filter((item) => item.id !== product.id)
          )
        : setCartProducts((prevState) => [
            ...prevState,
            { ...product, quantity: 1 },
          ]);
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
    (id: number) => {
      const updatedProductCartByIncreasedQnt = cartProducts.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return {
          ...item,
        };
      });
      setCartProducts(updatedProductCartByIncreasedQnt);
    },
    [cartProducts, setCartProducts]
  );

  const handleQuantityChange = useCallback(
    (id: number, value: number) => {
      if (Number.isNaN(value)) {
        return;
      }
      const updatedProductCartByQntValue = cartProducts.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: value,
          };
        }
        return {
          ...item,
        };
      });
      setCartProducts(updatedProductCartByQntValue);
    },
    [cartProducts, setCartProducts]
  );

  const handleDecreaseQuantity = useCallback(
    (id: number) => {
      const updatedProductCartByIncreasedQnt = cartProducts.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return {
          ...item,
        };
      });
      setCartProducts(updatedProductCartByIncreasedQnt);
    },
    [cartProducts, setCartProducts]
  );

  // Metoda wykorzystana, kiedy tablica produktow nie posiada property quantity
  // const handleIncreaseQuantity = useCallback(
  //   (product: Product) => {
  //     const currentProduct = cartProducts.find(
  //       (item) => item.id === product.id
  //     );
  //     if (!currentProduct) return;

  //     setQuantities((prevState) => ({
  //       ...prevState,
  //       [currentProduct.id]: prevState[currentProduct.id] + 1,
  //     }));
  //   },
  //   [cartProducts, setQuantities]
  // );

  const value = useMemo(
    () => ({
      cartToggle,
      handleToggleOpenCartSidebar,
      cartProducts,
      addToCart,
      checkIsAlreadyAdded,
      addToCartText,
      handleIncreaseQuantity,
      handleDecreaseQuantity,
      handleQuantityChange,
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
      handleDecreaseQuantity,
      handleQuantityChange,
      quantities,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
