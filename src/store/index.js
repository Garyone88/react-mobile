// 1 引入管理员
import reducer from "./reducers";
// 2 仓库生成器来创建
import { createStore } from "redux";

export default createStore(reducer);