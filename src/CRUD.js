import React from 'react';

class CRUD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: [],
            recordList: [],
            name: '',
            email: '',
            locality: '',
            age: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.addRecord = this.addRecord.bind(this);
        this.editRecord = this.editRecord.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        if (name === "age") {
            if (value < 0 || value > 120) {
                alert("The age should be between 0 - 120");
            }
        }
        this.setState({
            [name]: value
        });
    }

    addRecord() {
        if (this.state.name !== '' && this.state.email !== '' && this.state.locality !== '' && this.state.age !== '') {
            if ((this.state.age > -1) && (this.state.age <= 120)) {
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

    editRecord(record) {
        let removeRecordFromList = this.state.recordList;
        for (let i = 0; i < removeRecordFromList.length; i++) {
            if (removeRecordFromList[i] === record) {
                removeRecordFromList.splice(i, 1);
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

    deleteRecord(record) {
        let removeRecordFromList = this.state.recordList;
        for (let i = 0; i < removeRecordFromList.length; i++) {
            if (removeRecordFromList[i] === record) {
                removeRecordFromList.splice(i, 1);
                break;
            }
        }
        this.setState({
            recordList: removeRecordFromList
        })
    }

    render() {
        return (
            <div style={{ display: 'table', margin: '0 auto' }}>
                <h1>Covid-19 Survey Form</h1>
                <h4>Please enter the details below:</h4>
                <form>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required /> &nbsp;&nbsp;
                <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required /> &nbsp;&nbsp;
                <input type="text" name="locality" placeholder="Locality" value={this.state.locality} onChange={this.handleChange} required /> &nbsp;&nbsp;
                <input type="number" name="age" placeholder="Age" min="0" max="120" value={this.state.age} onChange={this.handleChange} required /> &nbsp;&nbsp;
                <button onClick={this.addRecord}>Submit</button> <br /><br />
                </form>
                <ul>
                    <table>
                        <thead><tr><th>{this.state.recordList.length > 0 ? "Records:" : null}</th></tr></thead> <br />
                        {this.state.recordList.length > 0 ? <tbody>
                            < tr >
                                <th style={{ padding: '10px' }}>Sr. No.</th>
                                <th style={{ padding: '10px' }}>Name</th>
                                <th style={{ padding: '10px' }}>Email</th>
                                <th style={{ padding: '10px' }}>Locality</th>
                                <th style={{ padding: '10px' }}>Age</th>
                                <th style={{ padding: '10px' }} colSpan="2">Actions</th>
                            </tr>
                            {this.state.recordList.map((record, index) =>
                                <tr>
                                    <td style={{ padding: '10px' }}> <li> {index + 1} </li> </td>
                                    <td style={{ padding: '10px' }}>{record[0]} </td>
                                    <td style={{ padding: '10px' }}>{record[1]} </td>
                                    <td style={{ padding: '10px' }}>{record[2]} </td>
                                    <td style={{ padding: '10px' }}>{record[3]} </td>
                                    <td style={{ padding: '10px' }}><button onClick={() => this.editRecord(record)}>Edit</button>&nbsp;&nbsp;</td>
                                    <td><button onClick={() => this.deleteRecord(record)}>Delete</button></td>
                                </tr>
                            )
                            }
                        </tbody> : null}
                    </table>
                </ul>
            </div>
        )
    }
}

export default CRUD;