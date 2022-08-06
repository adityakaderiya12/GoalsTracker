
import { useState } from "react";                                                    //State Management
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";



export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);          //This is the git command 
  }  //Handling Event

  function addGoalHandler() {
    setCourseGoals((currentCourseGOals) => [
      ...currentCourseGOals,
      { text: enteredGoalText, id: Math.random().toString() },

    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='your course goal!'
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {

            return <GoalItem text={itemData.item.text}/>;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />

      </View>
    </View>
  );

}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20

  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 10,

  }


});
