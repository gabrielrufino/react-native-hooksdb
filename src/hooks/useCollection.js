import {useEffect, useCallback, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
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

      const id = uuidv4();

      await AsyncStorage.setItem(
        collection,
        JSON.stringify([...elements, {id, ...element}]),
      );

      setElements([...elements, {id, ...element}]);
    },
    [collection, getAll],
  );

  const removeById = useCallback(
    async function (id) {
      const elements = await getAll();

      const newElements = elements.filter((element) => element.id !== id);

      await AsyncStorage.setItem(collection, JSON.stringify(newElements));

      setElements(newElements);
    },
    [collection, getAll],
  );

  return {
    [collection]: elements,
    insertOne,
    removeById,
  };
}
