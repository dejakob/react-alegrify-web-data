import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import allActions from '../actions';
import allEffects from '../effects';

const store = createStore(reducer, applyMiddleware(attachEffects));
store.subscribe(persistStore);

/**
 * Save store updates into localStorage
 */
function persistStore() {
    const state = store.getState();

    if (
        typeof window !== 'undefined' &&
        typeof window.localStorage === 'object' &&
        window.localStorage !== null &&
        typeof window.localStorage.setItem === 'function'
    ) {
        window.localStorage.setItem('app_state', JSON.stringify(state));
    }
}

/**
 * Component that updates based on store
 */
class StoreComponent extends React.PureComponent {
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
        })

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
            this.setState({
                ...this.state,
                ...update
            });
        }
    }

    render() {
        const props = { ...this.props };
        delete props.children;

        return React.cloneElement(this.props.children, {...props, ...this.state});
    }
}

/**
 * Decorator to update component on store changes
 *   and pass store data as properties
 * @param {React.Component} Component 
 * @param  {...String} keys 
 */
function withStoreItems(Component, ...keys) {
    return props => (
        <StoreComponent
            watchInStore={keys}
        >
            <Component {...props} />
        </StoreComponent>
    )
}

/**
 * Attach certain store action collections
 * @param {React.Component} Component 
 * @param  {...String} actionCollections 
 */
function withStoreActions(Component, ...actionCollections) {
    const actionsToAttach = {};

    actionCollections.forEach(actionCollectionKey => {
        actionsToAttach[actionCollectionKey] = bindActionsInCollection(allActions[actionCollectionKey]);
    });

    return props => (
        <Component
            {...props}
            actions={actionsToAttach}
        />
    );

    /**
     * Bind action fire methods to actions collection
     * @param {Object} actionCollection 
     * @returns {Object}
     */
    function bindActionsInCollection(actionCollection) {
        const updatedActionCollection = {};

        Object
            .keys(actionCollection)
            .forEach(actionKey =>
                updatedActionCollection[actionKey] = () => fireAction(updatedActionCollection[actionKey])
            );
        
        return updatedActionCollection;
    }

    /**
     * Fire an action with effects
     * @param {Object} action 
     */
    function fireAction(action) {
        if (
            typeof action === 'object' && 
            action !== null
        ) {
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

        if (typeof allEffects[action.type] === 'function') {
            fireEffect(allEffects[action.type], action);
        }
    };
}

/**
 * Trigger an asyncronous effect of an action
 * @param {Function} effect 
 * @param {Object} action 
 */
async function fireEffect(effect, action) {
    const { type } = action;

    try {
        const result = await effect(action);

        store.dispatch({ type: `${type}_SUCCESS`, ...result });
    }
    catch (errorData) {
        store.dispatch({ type: `${type}_FAILED`, errorData });
    }
}

export default store;
export {
    withStoreActions,
    withStoreItems
};