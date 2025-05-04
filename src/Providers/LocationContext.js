const { createContext, useContext } = require("react");


 export const LocationContext =  createContext();
 export const useLocationContext = ()=> useContext(LocationContext);