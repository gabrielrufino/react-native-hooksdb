<p align="center">
  <img width="200px" src="./docs/logo.png">
  <h1 align="center">React Native HooksDB</h1>
</p>

React Native database using React Hooks

### Getting Started

You've to install some required packages:

```bash
npm install @react-native-community/async-storage react-native-get-random-values
```

See more about **Async Storage** [here](https://github.com/react-native-community/async-storage)

After that, install our package:

```bash
npm install react-native-hooksdb
```

```jsx
import React, {useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {useCollection} from 'react-native-hooksdb';

export default function App() {
  const {users, insertOne, removeById} = useCollection('users');

  const addUser = useCallback(
    function () {
      insertOne({name: 'Gabriel Rufino'});
    },
    [insertOne],
  );

  const removeFirstUser = useCallback(
    function () {
      users[0] && removeById(users[0].id);
    },
    [removeById, users],
  );

  return (
    <View>
      <Button onPress={addUser} title="Add user" />
      <Button onPress={removeFirstUser} title="Remove first user" />

      {users.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  );
}
```
