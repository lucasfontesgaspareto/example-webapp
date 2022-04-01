import actions from './authActions';

export default (store) => {
  store.dispatch(actions.doInit());
};
