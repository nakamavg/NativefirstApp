// components/GoalItem.js
import React from 'react';
import { Text, View, StyleSheet, Pressable, } from 'react-native';

function goalItem (props) {
	const trimmedspaces = props.itemData.trim();
	if (!props.itemData || props.itemData.trim().length === 0) {
		return null;
	  }
	
  return (
   
    <View style={styles.goalItem}>
      <Pressable 
      android_ripple={{color: '#dddddd'}}
      onPress={props.onDelete.bind(this,props.id)}
      styles={({pressed}) => pressed && styles.pressedItem}
      >
			<Text style={styles.goalText}>{trimmedspaces}</Text>
	  </Pressable>
    	</View>
   
  );
};

const styles = StyleSheet.create({
	
   goalItem: {
    margin: 8,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#5e0acc',
    
  },
  pressedItem: {
    backgroundColor: 'white',
    opacity: 0.5,
  },

  goalText: {
	color: 'white',
  padding : 8
  },
});
export default goalItem;