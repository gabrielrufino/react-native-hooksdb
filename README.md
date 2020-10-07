<p align="center">
  <img width="200px" src="./docs/logo.png">
  <h1 align="center">React Native HooksDB</h1>
</p>

React Native database using React Hooks

### Getting Started

You've to install the package `@react-native-community/async-storage`:

```bash
npm install @react-native-community/async-storage
```

See more [here](https://github.com/react-native-community/async-storage)

After that, install our package:

```bash
npm install react-native-hooksdb
```

```jsx
import React from 'react'
import {View, Text} from 'react-native'
import {useCollection} from 'react-native-hooksdb'

export default function App() {
  const { users } = useCollection('users')

  return (
    <View>
      {users.map(user => (
        <Text>{user.name}</Text>
      ))}
    </View>
  )
}
```
