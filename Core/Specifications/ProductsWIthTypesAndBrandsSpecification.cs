using Core.Entitites;

namespace Core.Specifications
{
    public class ProductsWIthTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWIthTypesAndBrandsSpecification()
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }

        public ProductsWIthTypesAndBrandsSpecification(int id)
            : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);

        }
    }
}