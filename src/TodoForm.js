import React from 'react';
import TextField from '@material-ui/core/TextField';
import * as actions from './redux/actions';
import {connect} from 'react-redux';
// import { SAVE_TODO } from './redux/actions/actionTypes';

const TodoForm = ({value, updateValue, saveTodo}) => (

        <form onSubmit = { e => {
            e.preventDefault();
            saveTodo();
            
          }}>
          <TextField 
            type='text' 
            placeholder='New to do ...' 
            margin='normal'
            value={value} 
            onChange={(e) => updateValue(e.target.value)}/>
          </form>
);
    
const mapStateToProps = ({ todoReducer }) => {
    const {value} = todoReducer;
    return {value};
};

export default connect(mapStateToProps, actions)(TodoForm);