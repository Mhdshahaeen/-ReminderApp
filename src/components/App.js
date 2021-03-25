import React, {Component} from 'react'
import {add_reminder,remove_reminder, clear_reminder} from '../actions/index'
import moment from 'moment'
import {connect} from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from './rem.jpg'
class App extends Component{
    state ={
        text:'',
        date: new Date()
    }
    Render_Reminders =() =>{
        const {reminders}=this.props;
        return(
            <ul className="list-group">
                {
                    reminders.map(reminder=>{
                        return(
                            <li key={reminder.id} className="list-group-item">
                                <div>{reminder.text}</div>
                                <div>{moment (new Date (reminder.date)).fromNow()}</div>
                                <div className="remove btn btn-danger" onClick={()=>this.props.remove_reminder(reminder.id)}>X</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render (){
        return(
            <div className="App">
                 <img src={logo}/> 
                <div className="reminder-title">
                    <h2>What Should You Do</h2>
                </div>
                <input
                 className="form-control" type="text"
                 placeholder="Enter What Do you think"
                 value={this.state.text}
                 onChange={(e)=>this.setState({text:e.target.value})}
                 />
                 <DatePicker
                 className="form-control"
                 placeholderText="Enter Date"
                selected={this.state.date}
                onChange={(date)=>{this.setState({date})}}
                showTimeSelect
                timeFormat= "HH:MM"
                timeIntervals={15}
                dateFormat="MM d, yyyy h:mm aa"
                timeCaption="time"
                />         
                <button 
                 onClick = {()=>{
                     this.props.add_reminder(this.state.text,this.state.date)
                     this.setState({text:'' ,date:''})
                    }}
                 className="btn btn-primary btn-block"
                 >
                     Add Reminder
                     </button>
                     {this.Render_Reminders()}
                     <button className="btn btn-danger btn-block clear-all"
                     onClick={()=> this.props.clear_reminder()}
                 >
                     Clear Reminders
                     </button>


            </div>
        )
    }
}
export default connect(state=>{
    return{
        reminders:state
    }
}, {
    add_reminder,
    remove_reminder,
    clear_reminder
}
) (App) 