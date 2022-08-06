
import { useState } from "react";                                                    //State Management
import {
  StyleSheet,
  View,
  Button,
 
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";



export default function App() {


  const[modalIsVisible,setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  // function goalInputHandler(enteredText) {
  // setEnteredGoalText(enteredText);          //This is the git command 
  // }  //Handling Event

  function startAddGoalHandler(){
     setModalIsVisible(true);
  }
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGOals) => [
      ...currentCourseGOals,
      { text: enteredGoalText, id: Math.random().toString() },

    ]);
    endAddGoalHandler();
    
  }
  
  
   function deleteGoalHandler(id){
     setCourseGoals(currentCourseGOals => {
      return currentCourseGOals.filter((goal) => goal.id !== id);
     });
   }
  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal"
      color="#5e0acc"
      onPress={startAddGoalHandler}
      />
      <GoalInput 
      visible={modalIsVisible} 
      onAddGoal={addGoalHandler} 
      onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {

            return <GoalItem 
            text={itemData.item.text} 
            id ={itemData.item.id}
             onDeleteItem ={ deleteGoalHandler} 
             />;
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
