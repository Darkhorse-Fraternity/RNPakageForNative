import {StackActions, NavigationActions} from 'react-navigation';

let stateStore = {};

export const setRouteState = (index, routes) => {
  const newRoute = [...routes];
  stateStore = {index, routes: newRoute};
};
export const getRouteState = () => {
  return {index: stateStore.index, routes: [...stateStore.routes]};
};

export const removeRoute = key => {
  const routeState = getRouteState();
  const {routes} = routeState;
  if (routes && key) {
    // routes[routes.length -2] = routes[routes.length -1]
    const newRoute = routes.filter(item => {
      return item.key !== key;
    });
    // navigation.reset(routes)
    const actions = newRoute.map(item => NavigationActions.navigate(item));
    return StackActions.reset({
      index: actions.length - 1,
      actions,
    });
  }
};
