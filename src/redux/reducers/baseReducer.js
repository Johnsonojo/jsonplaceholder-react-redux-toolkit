/* eslint-disable no-unused-expressions */
const LOADING = {
  IDLE: "idle",
  PENDING: "pending",
};

// export const pending = () => (state, action) => {
//   if (state.loading === LOADING.IDLE) {
//     state.loading = LOADING.PENDING;
//   }
// };

// export const fulfilled = () => (state, action) => {
//   if (state.loading === LOADING.PENDING) {
//     state.loading = LOADING.IDLE;
//     state.error = null;
//     state.allUsers = action.payload;
//   }
// };

// export const rejected = () => (state, action) => {
//   if (state.loading === LOADING.PENDING) {
//     state.loading = LOADING.IDLE;
//     state.allUsers = null;
//     if (action.payload) {
//       state.error = action.payload;
//     } else {
//       state.error = action.error;
//     }
//   }
// };

export const pending = (type) => (state, action) => {
  state.loading = type || LOADING.PENDING;
};

export const fulfilled = (type) => (state, action) => {
  state.loading = LOADING.IDLE;
  state.error = null;
  state[type] = action.payload.data;
  !state.loaded.includes(type) && state.loaded.push(type);
};

export const fulfilledWithMeta = (type) => (state, action) => {
  state.loading = LOADING.IDLE;
  state.error = null;
  state[type].data = action.payload.data;
  state[type].meta = action.payload.meta;

  !state.loaded.includes(type) && state.loaded.push(type);
};

export const rejected = (type) => (state, action) => {
  state.loading = LOADING.IDLE;
  !state.loaded.includes(type) && state.loaded.push(type);

  if (action.payload) {
    state.error = action.payload;
  } else {
    state.error = action.error;
  }
};
