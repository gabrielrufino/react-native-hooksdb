import {useEffect, useCallback, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default function useCollection(collection) {
  const [elements, setElements] = useState([]);

  useEffect(
    function () {
      async function effect() {
        const item = await AsyncStorage.getItem(collection);

        if (!item) {
          AsyncStorage.setItem(collection, JSON.stringify([]));
        } else {
          setElements(JSON.parse(item));
        }
      }

      effect();
    },
    [collection],
  );

  const getAll = useCallback(
    async function () {
      const item = await AsyncStorage.getItem(collection);

      return JSON.parse(item);
    },
    [collection],
  );

  const insertOne = useCallback(
    async function (element) {
      const elements = await getAll();

      await AsyncStorage.setItem(
        collection,
        JSON.stringify([...elements, element]),
      );

      setElements([...elements, element]);
    },
    [collection, getAll],
  );

  return {
    [collection]: elements,
    insertOne,
  };
}
