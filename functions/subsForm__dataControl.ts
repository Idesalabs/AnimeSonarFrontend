 export function sendEmail(email:string) {
  const SteinStore = require("stein-js-client");
  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40"
  );

  store
  .append("Sheet1", [
    {
      email: email,
    }
  ])
  .then(res => {
    console.log(res);
  });
 }