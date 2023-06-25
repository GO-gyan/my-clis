let appState = {
    state: []
};
export function configure(state) {
  appState = {
    ...state
  };
}

export function read() {
  let { state = [] } = appState
  return state;
}

export function save(state) {
  configure({ state: [...appState.state, state ] })
}