import React , {Component} from 'react';
import {Form,  FormControl,Button} from 'react-bootstrap';
import './App.css';
import AgeStats from './ageStats';
class App extends Component{ 

    constructor() {
        super ();
        this.state = {
            newDate: '',
            bithday: '1900-01-01'
        }
    }

    changeBirthday() {
        console.log(this.state);
        this.setState({bithday:this.state.newDate});
    }


    render() {
        return (
            <div className="App">
                <Form inline>
                <h2>Input your Birthday !</h2>
                    <FormControl 
                        type="date"
                        onChange = { 
                            event => this.setState({
                            newDate: event.target.value })}
                    >

                    </FormControl>
                    {' '}
                    <Button onClick ={
                        () => this.changeBirthday() }
                    > Submit </Button>
                </Form>  
                <AgeStats date={this.state.bithday}/>            
            </div>
        );
    }
}

export default App;