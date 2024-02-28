import { configureStore } from "@reduxjs/toolkit";

import Authreducer from "./Authreducer";
import Questionlistreducer from "./Questionlistreducer";

const Store=configureStore({
    reducer:{
        auth:Authreducer,
        question:Questionlistreducer,
    }
})


export default Store;