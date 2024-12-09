import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Pressable, Button} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [contador, setContador] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddGoalHandler() {
		setModalVisible(true);
	}

  function cancelGoalAdditionHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentGoals => [...currentGoals, { id: contador.toString(), value: enteredGoalText }]);
    setContador(contador + 1);
    cancelGoalAdditionHandler();
  }
  function deleteGoalHandler(id)
  {
    console.log(id);
    //vamos a ver el ultimo estado
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) =>goal.id !== id);}
    )
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title='add new goal' color='#5e0acc' onPress={startAddGoalHandler}></Button>
      <GoalInput onCancel={cancelGoalAdditionHandler} visible={modalVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goals}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) =>
            <GoalItem
              itemData={itemData.item.value}
              id={itemData.item.id}
              onDelete={deleteGoalHandler}
              />}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
  },
  TextInput: {
    width: '70%',
    borderWidth: 1,
    padding: 10,
    marginRight: 8,
    padding: 8,
  },
  goals: {
    flex: 5,
  },
  goalItem: {
    padding: 8,
    margin: 8,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
});