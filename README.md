<p align="center">
  <img width="200px" src="./docs/logo.png">
</p>


# React Native HooksDB

React Native database using React Hooks

### Getting Started

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
