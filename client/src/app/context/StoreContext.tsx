import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Basket } from '../models/basket';

// interface and types for the objects
interface StoreContextValue {
  basket: Basket | null;
  setBasket: (basket: Basket) => void;
  removeItem: (productId: number, quantity: number) => void;
}

export const StoreContext = createContext<StoreContextValue | undefined>(
  undefined
);

// Create a storecontext hook
export default function useStoreContext() {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw Error('Oops - We do not seem to have anything inside the provider');
  }

  return context;
}

// Creates some states for the wrapper and logix to add and remove basket items
// Apply this in the higest level as possible, index.tsx
export function StoreProvider({ children }: PropsWithChildren<any>) {
  const [basket, setBasket] = useState<Basket | null>(null);

  function removeItem(productId: number, quantity: number) {
    if (!basket) return;

    const items = [...basket.items];

    const itemIndex = items.findIndex((i) => i.productId === productId);

    if (itemIndex >= 0) {
      items[itemIndex].quantity -= quantity;

      if (items[itemIndex].quantity === 0) items.splice(itemIndex, 1);
      setBasket((prevState) => {
        return { ...prevState!, items };
      });
    }
  }
  return (
    <StoreContext.Provider value={{ basket, setBasket, removeItem }}>
      {children}
    </StoreContext.Provider>
  );
}
