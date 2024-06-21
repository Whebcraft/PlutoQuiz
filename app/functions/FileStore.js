import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value, multiple) => {
  try {
    if (multiple) {
      const existingDataString = await AsyncStorage.getItem(key);
      let existingData;
      if (existingDataString) {
        existingData = JSON.parse(existingDataString);
      } else {
        existingData = [];
      }

      const dataExists = existingData.some((item) => item.id === value.id);
      if (!dataExists) {
        existingData.push(value);
      }

      if (!dataExists) {
        await AsyncStorage.setItem(key, JSON.stringify(existingData));
      }
    } else {
      await AsyncStorage.setItem(key, value);
    }
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? value : false;
  } catch (error) {}
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {}
};

export const removeItemById = async (key, id) => {
  try {
    const storedData = await AsyncStorage.getItem(key);

    if (storedData) {
      let recordItems = JSON.parse(storedData);
      const indexToRemove = recordItems.findIndex((item) => item.id === id);
      if (indexToRemove !== -1) {
        recordItems.splice(indexToRemove, 1);
        await AsyncStorage.setItem(key, JSON.stringify(recordItems));
        return recordItems;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {}
};
