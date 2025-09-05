import { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

export default function Index() {
  const [goalText, setgoalText] = useState("");
  const [goals, setGoals] = useState([]);
  function goalinputhandler(text) {
    setgoalText(text)
  }
  function addGoalHandeler() {
    setGoals((currentgoal) => [...currentgoal, goalText]);
  }
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          onChangeText={goalinputhandler}
          placeholder="Type Your name"
        />
        <Button title="Add Goal" onPress={addGoalHandeler} />
      </View>
      <View style={styles.goalContainer}>
        <Text >List Of Goals</Text>
        {goals.map((goal,i)=> <Text key={i}>{goal}</Text> )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    paddingTop: 50,
    paddingHorizontal: 10,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 24,
    borderBottomColor: "#cccccc",
    flex: 1,
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 8,
  },
  goalContainer: {
    flex: 4,
  },
});
