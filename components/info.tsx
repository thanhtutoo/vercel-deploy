"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data?.title}</h1>

      <div className="pt-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          {data?.description}
        </h2>

        <div className="mt-4 flex items-baseline">
          <div className="text-gray-900 text-lg font-semibold">
            <Currency value={data?.price} />
          </div>
          <div className="ml-2 text-sm text-green-600 font-medium bg-green-200 px-2 py-1 rounded-full">
            {`${data?.discountPercentage}% off`}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="text-md text-gray-900" data-cy-info="rating">
              Rating: {data?.rating}
            </div>
            <div className="ml-2 text-md text-gray-500" data-cy-info="stock">
              ({data?.stock} in stock)
            </div>
          </div>
          <div className="mt-1 text-md text-gray-500" data-cy-info="brand">
            Brand: {data?.brand}
          </div>
          <div className="mt-1 text-md text-gray-500" data-cy-info="category">
            Category: {data?.category}
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          data-cy-button="cart"
          className="flex items-center gap-x-2"
        >
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
