// ** Icon imports
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'

const navigationBar = () => {

  return [
    {
            title: 'Dashboard',
            icon: HomeOutline,
            path: '/'
          },
          {
            sectionTitle: 'Products Section'
          },
          {
            icon: CubeOutline,
            title: 'Buy Product',
            path: '/products/buy-product'
          },
          {
            title: 'All Products Stages',
            icon: Table,
            path: '/products/products-stages'
          },
          {
            sectionTitle: 'Tracking'
          },
          {
            icon: CubeOutline,
            title: 'Track the Product',
            path: '/products/track-product'
          }
        ];
}

export default navigationBar;
