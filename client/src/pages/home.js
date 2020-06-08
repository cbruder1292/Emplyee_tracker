import React from "react";

export default class Home extends React.Component{
    state = {
        query: "",
        employees: [
            {
                name: "Paul blart",
                job: "Mall cop",
                id: "3"
            },
            {
                name: "John Wayne",
                job: "Cowboy",
                id: "4",
        
        
            }

        ],
        filtered: []
    }
    handleInput = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        });
        this.filterEmployees();

    }
componentDidMount(){
    //Get all the employees
    //Update filtered employees
    this.setState({
        filtered: this.state.employees
    })
}
filterEmployees = () => {
    if(this.state.query.length === 0) {
        this.setState({
            filtered: this.state.employees
        })
    } else {
        const temp = this.state.employees.filter(employee=> {
            return employee.name.includes(this.state.query)
        });
        this.setState({
            filtered: temp
        })
    }

}
    render(){
        return(
            <div>
                {//input area

                }
                <form className="form">
                    <input 
                        value={this.state.query}
                        name="query"
                        onChange={this.handleInput}
                        type="text"
                        placeholder="John Doe"
                    />
                </form>

                {//make this pretty with a table and use the map to create the table data
                }
                {this.state.filtered.map(employee => (
                        <>
                        {employee.name}
                        </>
                    )
                )}
            </div>
        )
    }
}
