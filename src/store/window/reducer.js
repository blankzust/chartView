import { ADD_WIDGET, REMOVE_WIDGET } from "./action";

let initialState = {
  width: "auto",
  height: "auto",
  title: "",
  background: "",
  activeWidgetId:"yfy6657uhyhgt88",
  widgets: {
    yfy6657uhyhgt88: {
      id: "yfy6657uhyhgt88",
      left: 50,
      top: 50,
      width: 400,
      height: 350
    }
  }
};

const windowReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return Object.assign({}, state, { widgets: { ...action } });
    case REMOVE_WIDGET:
      state.widgets.delete(action.widgetId);
      return state;
    default:
      return state;
  }
};

export default windowReducer;