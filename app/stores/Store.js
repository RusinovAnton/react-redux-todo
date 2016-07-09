import log from '../utils/log.util';
import {isFunction} from 'lodash';

export default class Store {

    constructor(reducer) {
        this._state = {};
        this.reducer = reducer;
        this.listeners = [];
        this.dispatch({});
    }

    get state() {
        return this._state;
    }

    dispatch(action) {
        log.dispatch(action.type);
        this._state = this.reducer(this._state, action);
        this.listeners.forEach(listener => {
            if (!listener.actions || ~listener.actions.indexOf(action.type)) listener.run(this._state)
        });
    }


    subscribe(action, listener) {
        this.listeners.push(
            {
                actions: !action ? null : [].concat(action),
                run: listener
            }
        );

        // Return unsubscribe()
        return () => {
            this.listeners = this.listeners.filter(l=>l.run!==listener);
        }
    }

}
