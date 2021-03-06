import React,{useState} from 'react';
import {StyledContent,StyledBtn,StyledText} from './style'
import {View, ScrollView,Image} from 'react-native'
import HTMLView from 'react-native-htmlview';
import {StyleSheet} from 'react-native';
import {richTextString} from './richTextSring'




function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == 'div') {
      const specialSyle = node.attribs.style
      return 
        defaultRenderer(node.children, parent)
    }
}

const renderRootComponent = element => <ScrollView {...element} />

const render = () => {
  // const htmlContent = `<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`;
  const htmlContent = `
  <div>
    <mytag>
      <div>自定义标签重写样式</div>
    </mytag>
  </div>
`;

  // const value = 0;
  return (
    <HTMLView 
    textComponentProps={{overflow: 'hidden'}}
    nodeComponentProps={{overflow: 'hidden'}}
    style={{marginBottom:20}}
    value={richTextString} 
    renderNode={renderNode} 
    removeClippedSubviews
    stylesheet={styles}
    NodeComponent={element => <View {...element} />}
    rootComponentProps={{removeClippedSubviews:true}}
    RootComponent={renderRootComponent} />
   
   );
};



const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
  p:{
    fontSize:17,
  }
});


export default render;


