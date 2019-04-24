import { connect } from 'react-redux'
import Names from "./nameinput";
import {addName, updateGreeting} from "../actions";
import Language from "./language";
import Constants from "../constants";
import Greet from "./greet";

export const LanguageDropdown = connect(
    null,
    dispatch => ({
        onLanguageChange(event) {
            const newGreeting = Constants.GREETINGS.filter(greetingData => greetingData.language === event.target.value)[0].greeting
            dispatch(updateGreeting(newGreeting))
        }
    })
)(Language)

export const NamesInput = connect(
    state =>
        ({
            names: state.names
        }),
    dispatch =>
        ({
            onChange(event) {
                let newValues = event.target.value.split('\n')
                    .filter(value => value !== '')
                if (!!newValues) {
                    dispatch(addName(newValues))
                }
            }
        })
)(Names)


export const Greetings = connect(
    state => ({
        names: state.names,
        greeting: state.greeting
    })
)(Greet)