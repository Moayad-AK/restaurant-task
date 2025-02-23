import React, { createContext, useState } from "react";

interface QuantityPriceContextType {
  quantity: number;
  price: number;
  setQuantity: (qty: number) => void;
  setPrice: (price: number) => void;
}

interface IProps {
  children: React.ReactNode;
}
export const QuantityPriceContext = createContext<QuantityPriceContextType>(
  {} as QuantityPriceContextType
);

const QuantityPriceProvider = ({ children }: IProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  return (
    <QuantityPriceContext.Provider
      value={{ quantity, price, setQuantity, setPrice }}
    >
      {children}
    </QuantityPriceContext.Provider>
  );
};

export default QuantityPriceProvider;
