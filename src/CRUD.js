import React from 'react';

class CRUD extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            record: [],
            recordList: [],
            name: '',
            email: '',
            locality: '',
            age: '',
        }
        this.handleNameText = this.handleNameText.bind(this);
        this.handleEmailText = this.handleEmailText.bind(this);
        this.handleLocalityText = this.handleLocalityText.bind(this);
        this.handleAgeText = this.handleAgeText.bind(this);
        this.addRecord = this.addRecord.bind(this);
        this.editRecord = this.editRecord.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
    }

    handleNameText(event)
    {
        this.setState({name: event.target.value});
    }

    handleEmailText(event)
    {
        this.setState({email: event.target.value});
    }

    handleLocalityText(event)
    {
        this.setState({locality: event.target.value});
    }

    handleAgeText(event)
    {
        this.setState({age: event.target.value});
    }

    addRecord()
    {
        if (this.state.name !== '' && this.state.email !== '' && this.state.locality !== '' && this.state.age !== '')
        {
            if((this.state.age > -1) && (this.state.age <= 120))
            {
                let record = [this.state.name, this.state.email, this.state.locality, this.state.age];
                let currentRecordList = this.state.recordList;
                currentRecordList.push(record);
                this.setState({
                    name: '',
                    email: '',
                    locality: '',
                    age: '',
                    recordList: currentRecordList,
                })
            }
            else {
                alert('The age should be between 0 - 120');
            }
        }
        else {
            alert('Please Enter all Details');
        }
    }

    editRecord(record)
    {
        let removeRecordFromList = this.state.recordList;
        for(let i = 0; i < removeRecordFromList.length; i++)
        {
            if(removeRecordFromList[i] === record)
            {
                removeRecordFromList.splice(i,1);
                break;
            }
        }
        this.setState({
            name: record[0],
            email: record[1],
            locality: record[2],
            age: record[3],
        })
    }

    deleteRecord(record)
    {
        let removeRecordFromList = this.state.recordList;
        for(let i = 0; i < removeRecordFromList.length; i++)
        {
            if(removeRecordFromList[i] === record)
            {
                removeRecordFromList.splice(i,1);
                break;
            }
        }
        this.setState({
            recordList: removeRecordFromList
        })
    }

    render()
    {
        return (
            <div>
                <h1>Covid-19 Survey Form</h1>
                <h4>Please enter the details below:</h4>
                <form>
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameText} required /> &nbsp;&nbsp;
                <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailText} required /> &nbsp;&nbsp;
                <input type="text" placeholder="Locality" value={this.state.locality} onChange={this.handleLocalityText} required /> &nbsp;&nbsp;
                <input type="number" placeholder="Age" min="0" max="120" value={this.state.age} onChange={this.handleAgeText} required /> &nbsp;&nbsp;
                <button onClick={this.addRecord}>Submit</button> <br/><br/>
                </form>
                <ul>
                    <table>
                        <thead><tr><th>Records:</th></tr></thead> <br/>
                        <tbody>
                            <tr>
                                <th style={{padding:'10px'}}>Sr. No.</th>
                                <th style={{padding:'10px'}}>Name</th>
                                <th style={{padding:'10px'}}>Email</th>
                                <th style={{padding:'10px'}}>Locality</th>
                                <th style={{padding:'10px'}}>Age</th>
                                <th style={{padding:'10px'}} colSpan="2">Actions</th>
                            </tr>
                            {   this.state.recordList.map((record, index) =>
                                    <tr>
                                        <td style={{padding:'10px'}}> <li> {index+1} </li> </td>
                                        <td style={{padding:'10px'}}>{record[0]} </td>
                                        <td style={{padding:'10px'}}>{record[1]} </td>
                                        <td style={{padding:'10px'}}>{record[2]} </td>
                                        <td style={{padding:'10px'}}>{record[3]} </td>
                                        <td style={{padding:'10px'}}><button onClick={() => this.editRecord(record)}>Edit</button>&nbsp;&nbsp;</td>
                                        <td><button onClick={() => this.deleteRecord(record)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </ul>
            </div>
        )
    }
}

export default CRUD;