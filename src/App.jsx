import React from 'react'
import { PromoBanner } from './components/PromoBanner'
import Header from './components/Header'
import { Footer } from './components/footer'


const App = () => {
  const user = "Jyothsnavi";

  const featuredproduct = {
    name: 'Noise Wireless Headphones',
    Price: 1999,
    instock: true,
  };

  return (
    <>
    <div>
      <PromoBanner/>
    </div>
    <main className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to Astras
      </h1>
      <section className="bg-gray-200 shadow p-5 rounded-lg max-w-md">
        <h2 className="text-xl font-semibold mb-2">
          ✨Featured Product
        </h2>
        <p>
          <strong>Name:</strong>{featuredproduct.name}
        </p>
        <p>
          <strong>Price:</strong>{featuredproduct.Price}
        </p>
        <p>
          <strong>Status:</strong>{' '}
          <span className={featuredproduct.instock ? "text-green-600":"text-red-700"}>
            {featuredproduct.instock?"Available":"out of stock"}
          </span>
        </p>
      </section>

    </main>
    </>
  )
};
export default App


