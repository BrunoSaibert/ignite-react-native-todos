import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //DONE - add new task
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      done: false,
    };

    setTasks((prev) => [...prev, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    //DONE - toggle task done if exists
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }

      return task;
    });

    setTasks([...updatedTasks]);
  }

  function handleRemoveTask(id: number) {
    //DONE - remove task from state
    const taskListFiltered = tasks.filter((task) => task.id !== id);

    setTasks([...taskListFiltered]);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
