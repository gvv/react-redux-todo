import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  return (
    <Fragment>   {/* en lugar de un div vacio*/}
    <Typography variant='h3' align='center' gutterBottom>
      react-redux To Do
    </Typography>
    <Grid container justify='center'>
      <Grid item>
         <TodoForm />
      </Grid>
    </Grid>
    <Grid container justify='center'>
      <Grid item md={8}>
        <TodoList />
      </Grid>
    </Grid>
    </Fragment>
  )
}

export default App;
