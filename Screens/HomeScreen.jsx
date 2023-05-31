//
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";

export default function HomeScreen({ navigation, route }) {
  //här är sista delen som jag implimentera

  const [todos, setTodos] = useState([]);
  // const [todos, setTodos] = useState([
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     title: "First Item",
  //   },
  // ]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate("Add")} title="Add" />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (route.params?.todo) {
      console.log("new todo: ", route.params?.todo);

      const todo = {
        title: route.params?.todo.text,
        id: Date.now(),
      };
      setTodos((prev) => [...prev, todo]);
    }
  }, [route.params?.todo]);
  //A ny
  useEffect(() => {
    if (route?.params?.deleteId) {
      // const newTodos = todos.filter((item) => item.id !== id);
    }
    setTodos((prev) => {
      return prev.filter((todo) => todo.id != route?.params?.deleteId);
    });
  }, [route?.params?.deleteId]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", {
                title: item.title,
                id: item.id,
              });
            }}
          >
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    height: 80,
    padding: 10,
  },
  header: { fontSize: 20, padding: 10 },
  title: {},
});
