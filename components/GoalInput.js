import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button , Modal, Image} from "react-native";

function GoalInput(props) {
	const [enteredGoal, setEnteredGoal] = useState('');
	
	function goalInputHandler(patata) {
		setEnteredGoal(patata);
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoal);
		setEnteredGoal(''); // Clear the input field after adding the goal
	}

	return (
	<Modal visible={props.visible} animationType="slide">
		<View style={styles.inputContainer}>
			<Image style={styles.courseImage} source={require('../assets/images/goal.png')} />
			<TextInput
				style={styles.TextInput}
				placeholder="Course Goal"
				onChangeText={goalInputHandler}
				value={enteredGoal}
			/>
		<View style={styles.buttonContainer}>
			<View style={styles.button}>
			<Button title="ADD" color='pink'  onPress={addGoalHandler} />
			</View>
			<View style={styles.button}>
			<Button title="CANCEL" color={'red'} onPress={props.onCancel} />
			</View>
		</View>
		</View>
	</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 24,
		borderBottomWidth: 1,
		backgroundColor: 'purple',
	},
	TextInput: {
		width: '70%',
		borderWidth: 1,
		padding: 10,
		marginRight: 8,
		padding: 8,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 8,
 		},
	buttonContainer: {
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	courseImage: {
		width: 100,
		height: 100,
		backgroundColor: 'purple',
	},
});

export default GoalInput;