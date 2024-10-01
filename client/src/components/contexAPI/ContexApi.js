import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

// Create the context
const ApiContext = createContext();

// Custom hook to use the ApiContext
export const useApi = () => useContext(ApiContext);
export const ApiProvider = ({ children }) => {
    

}
