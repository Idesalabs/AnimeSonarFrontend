const SteinStore = require("stein-js-client")

interface StoreAppendReturn {
  "updatedRange": string
}


export default async (email: string): Promise<boolean> => {
  try {
    const store = new SteinStore(
      "https://api.steinhq.com/v1/storages/5e4b60ef5a823204986f3bb1"
    );

    await (store.append("Sheet1", [{ email }]) as Promise<StoreAppendReturn>)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

