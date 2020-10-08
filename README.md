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

#### Reading elements

```jsx
import React from 'react';
import {View, Text} from 'react-native';
import {useCollection} from 'react-native-hooksdb';

export default function Users() {
  const {users} = useCollection('users');

  return (
    <View>
      {users.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  );
}
```

#### Inserting element

```jsx
import React, {useCallback, useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useCollection} from 'react-native-hooksdb';

export default function InsertUser() {
  const {insertOne} = useCollection('users');

  const [name, setName] = useState('');

  const insertUser = useCallback(
    async function () {
      await insertOne({name});

      setName('');
    },
    [insertOne, name],
  );

  return (
    <View>
      <TextInput onChangeText={setName} value={name} />

      <Button onPress={insertUser} title="Insert user" />
    </View>
  );
}
```

#### Updating element by id

```jsx
import React, {useCallback, useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useCollection} from 'react-native-hooksdb';

export default function UpdateUser() {
  const {updateById} = useCollection('users');

  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const updateUser = useCallback(
    async function () {
      await updateById(id, {name});

      setId('');
      setName('');
    },
    [id, name, updateById],
  );

  return (
    <View>
      <TextInput onChangeText={setId} value={id} />
      <TextInput onChangeText={setName} value={name} />

      <Button onPress={updateUser} title="Update user" />
    </View>
  );
}
```

#### Removing element by id

```jsx
import React, {useCallback, useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useCollection} from 'react-native-hooksdb';

export default function RemoveUser() {
  const {removeById} = useCollection('users');

  const [id, setId] = useState('');

  const removeUser = useCallback(
    async function () {
      await removeById(id);

      setId('');
    },
    [id, removeById],
  );

  return (
    <View>
      <TextInput onChangeText={setId} value={id} />

      <Button onPress={removeUser} title="Remove user" />
    </View>
  );
}
```
