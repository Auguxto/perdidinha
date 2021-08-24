import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToStorage(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export async function getFromStorage(key: string): Promise<any> {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  } catch {
    console.log(`${key}: no data!`);
  }
}

export async function saveUser(user: User) {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch {
    console.log(`Error on saving ${user}`);
  }
}

export async function getUser(): Promise<User> {
  try {
    let user = await AsyncStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  } catch {}
}

export async function removeUser() {
  try {
    await AsyncStorage.removeItem('user');
  } catch {}
}
