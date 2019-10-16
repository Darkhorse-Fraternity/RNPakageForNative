import React,{PureComponent, Suspense, LazyExoticComponent,ReactElement} from 'react';
import load from './load'

interface RHType {
    readonly navigationOptions: Function,
    readonly render: LazyExoticComponent<() => ReactElement>,
  }
  
  //react-navigation 不支持用function 这里做一个转换

 export const lazyRender = (RD:any)=>() => {
    return (
      <Suspense fallback={load()}>
        <RD />
      </Suspense>
    );
  };

 export const toLazyExoticComponent = (rh:RHType)=>{
    const {navigationOptions,render} =rh;
    class cmp extends PureComponent {}
   
    cmp.navigationOptions = navigationOptions;
    cmp.prototype.render = ()=>(
      lazyRender(render)()
    )
    return cmp
  }
  