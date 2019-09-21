import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm'

function App() {
  return (
    <Fragment>   {/* en lugar de un div vacio*/}
    <Typography variant='h2' align='center' gutterBottom>
      Lista To-Do
    </Typography>
    <Grid container justify='center'>
      <Grid item>
         <TodoForm />
      </Grid>
    </Grid>
    <Grid container justify='center'>
      <Grid item md={8}>
        {/*<TodoList
         todos={this.state.todos} 
         deleteTodo={this.deleteTodo} 
         toggleCompleted={this.toggleCompleted} />
        */}
      </Grid>
    </Grid>
    </Fragment>
  )
}

export default App;
