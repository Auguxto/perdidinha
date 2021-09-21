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
  } catch (err) {
    console.log(`Error on saving ${user}`);
    console.log(err);
  }
}

export async function saveAvatar(uri: string) {
  try {
    let user = await getUser();
    if (user) {
      user.avatar = uri;
      await saveUser(user);
    }
  } catch {}
}

export async function saveName(name: string) {
  try {
    let user = await getUser();
    if (user) {
      user.name = name;
      await saveUser(user);
    }
  } catch {}
}

export async function saveBiometry(biometry: boolean) {
  try {
    let user = await getUser();
    if (user) {
      user.biometry = biometry;
      await saveUser(user);
    }
  } catch {}
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
  } catch (err) {
    console.log(err);
  }
}

export async function loadPasswords(): Promise<Password[]> {
  try {
    let passwords = await AsyncStorage.getItem('passwords');
    if (!passwords) {
      await saveToStorage('passwords', []);
      return [];
    }
    return JSON.parse(passwords);
  } catch (err) {
    console.log(err);
  }
}

export async function savePassword(password: Password): Promise<Password[]> {
  try {
    const local_pass = await loadPasswords();
    const new_pass = [password, ...local_pass];
    await saveToStorage('passwords', new_pass);
    const passwords = await loadPasswords();
    return passwords;
  } catch {}
}

export async function removePassword(id: string): Promise<Password[]> {
  try {
    const local_pass = await loadPasswords();
    const new_pass = local_pass.filter(pass => pass.id !== id);
    await saveToStorage('passwords', new_pass);
    const passwords = await loadPasswords();
    return passwords;
  } catch {}
}

export async function favoritePassword(id: string): Promise<Password[]> {
  try {
    let local_pass = await loadPasswords();
    const passwordIndex = local_pass.findIndex(password => password.id === id);
    local_pass[passwordIndex].favorite = !local_pass[passwordIndex].favorite;
    await saveToStorage('passwords', local_pass);
    const passwords = await loadPasswords();
    return passwords;
  } catch {}
}
