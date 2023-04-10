import AsyncStorage from "@react-native-async-storage/async-storage";
export const LocalData = () => {

    const set = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (error) {
            console.log(error)
        }
    }

    const get = async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value !== null) {
                return value
            }
        } catch (error) {
            console.log(error)
        }
    }

    const remove = async (key: string) => {
        try {
            await AsyncStorage.removeItem(key)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        set,
        get,
        remove
    }
}