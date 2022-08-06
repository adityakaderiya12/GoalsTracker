
import { useState } from "react";                                                    //State Management
import {
  StyleSheet,
  View,
 
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";



export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  // function goalInputHandler(enteredText) {
  // setEnteredGoalText(enteredText);          //This is the git command 
  // }  //Handling Event

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGOals) => [
      ...currentCourseGOals,
      { text: enteredGoalText, id: Math.random().toString() },

    ]);
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {

            return <GoalItem text={itemData.item.text} />;
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
  
  goalsContainer: {
    flex: 10,

  }


});
