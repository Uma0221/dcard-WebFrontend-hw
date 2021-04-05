import actionType from '../Constants/actionType';

const initialAppState = {
    scenicspot: [],
    cityscenicspot: [],
    requestdata: { loading: false, error: null }
};

const appReducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_SCENICSPOT_DATA: {
      return {...state, scenicspot: action.payload };
    }
    case actionType.SET_CITYSCENICSPOT_DATA: {
      return {...state, cityscenicspot: action.payload };
    }
    case actionType.BEGIN_DATA_REQUEST:
      return {
        ...state,
        requestdata: { ...state.requestdata, loading: true },
      };
    case actionType.SUCCESS_DATA_REQUEST:
      return {
        ...state,
        requestdata: { ...state.requestdata, loading: false },
      };
    case actionType.FAIL_DATA_REQUEST:
      return {
        ...state,
        requestdata: {
          ...state.requestdata,
          loading: false,
          error: action.payload,
        },
      };
    default:
        return state;
    }
};

export { initialAppState, appReducer };