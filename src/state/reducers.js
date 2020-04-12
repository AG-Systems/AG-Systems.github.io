const site_state = (state, action) => {
    switch (action.type) {
        case 'CHANGE_DARK_MODE':
          return {
              ...state,
              dark_mode: !state.dark_mode,
          };
        default:
            return state;
    }
};


export default site_state;
