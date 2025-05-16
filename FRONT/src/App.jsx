import { useEffect, useState } from 'react';
import Layout from './layout'
import { fetchProducts } from './api/products'
import './App.css'
import Boutique from './components/boutique';

export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <Layout>
      <div className='flex flex-col gap-10'>
        <div className="App px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center">
          <h1 className='text-5xl font-bold text-gray-800 pb-2'>
            Bienvenue sur MongoCommerce
          </h1>
          <p className='text-xl'>Simple, rapide...
            Tes inscriptions et commandes
            en moins de 5 minutes !</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-10'>
          <h2 className='text-2xl font-bold text-gray-800 pt-10 pb-2'>
            Derniers produits
          </h2>
          <Boutique products={products.slice(0, 3)} />
        </div>
      </div>
    </Layout>
  )
}