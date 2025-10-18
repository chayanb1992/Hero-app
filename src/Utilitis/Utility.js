const getIdFromLocalStorage = () => {
  const appId = localStorage.getItem("appsId");
  if (appId) {
    return JSON.parse(appId);
  } else {
    return [];
  }
};

const setIdToLocalStorage = (id) => {
  const appId = getIdFromLocalStorage();
  appId.push(id);
  localStorage.setItem("appsId", JSON.stringify(appId));
};
const removeItems = (id) => {
  const appsId = getIdFromLocalStorage();
  const newAppId = appsId.filter((appId) => appId !== id);
  console.log(newAppId);
  localStorage.setItem("appsId", JSON.stringify(newAppId));
};

export { setIdToLocalStorage, getIdFromLocalStorage, removeItems };
