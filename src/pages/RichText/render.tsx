import React,{useState} from 'react';
import {StyledContent,StyledBtn,StyledText} from './style'
import {Text} from 'react-native'
import HTMLView from 'react-native-htmlview';
import {StyleSheet} from 'react-native';



function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == 'mytag') {
      const specialSyle = node.attribs.style
      return (
        <Text key={index} style={specialSyle}>
          {defaultRenderer(node.children, parent)}
        </Text>
      )
    }
}


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
    <HTMLView value={htmlContent} renderNode={renderNode} />
   );
};



const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});


export default render;


