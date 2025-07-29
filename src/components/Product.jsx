import ProductCard from './cards/ProductCard';
import { useTheme } from '../hooks/useTheme';
import { ProductContext } from '../context/ProductContext';
import{useProductTheme} from '../hooks/productTheme';
const Product = () => {
  const {productList} = useProductTheme();

  const { isDark } = useTheme();
  return (
    <>
      <div
        className={`p-4 mt-5 shadow rounded-lg ${
          isDark ? 'bg-primarycolor-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}
      >
        <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Recent Added Products
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3">
          {productList.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              category={product.category}
              date={product.date}
              status={product.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
