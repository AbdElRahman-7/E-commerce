import Collections from "../components/AllProducts";
import NewCollections from "../components/NewCollections";
import NewProducts from "../components/NewProducts";
import ProductDescription from "../components/ProductDescription";
import WovenImageList from "../components/WovenImageList";

const AdminPages = () => {
  return (
    <>
        <NewCollections />
        <NewProducts />
        <Collections/>
        <ProductDescription/>
        <WovenImageList/>
    </>
  );
};

export default AdminPages;
