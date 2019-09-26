import {NavigationRouteConfigMap} from 'react-navigation';
import Test from './Test'
import Test2 from './Test2'


const baseRoute: NavigationRouteConfigMap = {
  testPage: {screen: Test},
  test2: {screen: Test2},
};
export default baseRoute;
