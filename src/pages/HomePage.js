import React from "react";
import { ProductConsumer } from "../context";

export default function HomePage() {
  return (
    <>
      <ProductConsumer>
        {value => {
          return <h2>hello from homepage</h2>;
        }}
      </ProductConsumer>
    </>
  );
}
