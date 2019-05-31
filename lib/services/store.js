"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withStoreActions = withStoreActions;
exports.withStoreItems = withStoreItems;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _reducers = _interopRequireDefault(require("../reducers"));

var _actions = _interopRequireDefault(require("../actions"));

var _effects = _interopRequireDefault(require("../effects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const store = (0, _redux.createStore)(_reducers.default, (0, _redux.applyMiddleware)(attachEffects));
store.subscribe(persistStore);
/**
 * Save store updates into localStorage
 */

function persistStore() {
  const state = store.getState();

  if (typeof window !== 'undefined' && typeof window.localStorage === 'object' && window.localStorage !== null && typeof window.localStorage.setItem === 'function') {
    window.localStorage.setItem('app_state', JSON.stringify(state));
  }
}
/**
 * Component that updates based on store
 */


class StoreComponent extends _react.default.PureComponent {
  constructor() {
    super();
    this.handleStoreUpdate = this.handleStoreUpdate.bind(this);
  }

  componentWillMount() {
    this.reduxWatcher = store.subscribe(this.handleStoreUpdate);
    const storeState = store.getState();
    const state = {};
    this.props.watchInStore.forEach(key => {
      state[key] = storeState[key];
    });
    this.setState(state);
  }

  componentWillUnmount() {
    this.reduxWatcher();
  }

  handleStoreUpdate() {
    const storeState = store.getState();
    const update = {};
    this.props.watchInStore.forEach(key => {
      if (storeState[key] !== this.state[key]) {
        update[key] = storeState[key];
      }
    });

    if (Object.keys(update).length) {
      this.setState({ ...this.state,
        ...update
      });
    }
  }

  render() {
    const props = { ...this.props
    };
    delete props.children;
    return _react.default.cloneElement(this.props.children, { ...props,
      ...this.state
    });
  }

}
/**
 * Decorator to update component on store changes
 *   and pass store data as properties
 * @param {React.Component} Component 
 * @param  {...String} keys 
 */


function withStoreItems(Component, ...keys) {
  return props => _react.default.createElement(StoreComponent, {
    watchInStore: keys
  }, _react.default.createElement(Component, props));
}
/**
 * Attach certain store action collections
 * @param {React.Component} Component 
 * @param  {...String} actionCollections 
 */


function withStoreActions(Component, ...actionCollections) {
  const actionsToAttach = {};
  actionCollections.forEach(actionCollectionKey => {
    actionsToAttach[actionCollectionKey] = bindActionsInCollection(_actions.default[actionCollectionKey]);
  });
  return props => _react.default.createElement(Component, _extends({}, props, {
    actions: actionsToAttach
  }));
  /**
   * Bind action fire methods to actions collection
   * @param {Object} actionCollection 
   * @returns {Object}
   */

  function bindActionsInCollection(actionCollection) {
    const updatedActionCollection = {};
    Object.keys(actionCollection).forEach(actionKey => updatedActionCollection[actionKey] = () => fireAction(updatedActionCollection[actionKey]));
    return updatedActionCollection;
  }
  /**
   * Fire an action with effects
   * @param {Object} action 
   */


  function fireAction(action) {
    if (typeof action === 'object' && action !== null) {
      store.dispatch(action);
    }
  }
}
/**
 * Attach effects as middleware
 */


function attachEffects() {
  return next => action => {
    next(action);

    if (typeof _effects.default[action.type] === 'function') {
      fireEffect(_effects.default[action.type], action);
    }
  };
}
/**
 * Trigger an asyncronous effect of an action
 * @param {Function} effect 
 * @param {Object} action 
 */


async function fireEffect(effect, action) {
  const {
    type
  } = action;

  try {
    const result = await effect(action);
    store.dispatch({
      type: `${type}_SUCCESS`,
      ...result
    });
  } catch (errorData) {
    store.dispatch({
      type: `${type}_FAILED`,
      errorData
    });
  }
}

var _default = store;
exports.default = _default;