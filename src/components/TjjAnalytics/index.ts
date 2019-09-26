import {NativeModules} from 'react-native';
const {TjjAnalyticsBridge} = NativeModules;
const TjjAnalytics = TjjAnalyticsBridge;
// const {viewWillAppear, viewWillDisappear} = TjjAnalytics;




export default TjjAnalytics;

let lastPageId: string;
export function tackerView(pageId?: string) {
  
    
    if(!pageId ){
        pageId = 'TestPage';
    }

    if(pageId === lastPageId){
        return;
        
    }
    console.log('pageId', pageId);
    if(lastPageId){
        // viewWillDisappear(lastPageId);  
    }

    // viewWillAppear(pageId);
    lastPageId = pageId;
}
