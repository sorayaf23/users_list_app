import React from 'react'

function Index(){
    return(
        <div className=" p-5  border rounded">
            <h3>Description:</h3>
            <ul className=" mt-4" style={{ listStyle: "disc" }}>            
                <li className="mb-3">This program gets "First Name" and "Last Name" from user.</li>
                <li className="mb-3" >And makes a "Users List".</li>
                <li className="mb-3">So for making new User, click on "Create" tab</li>
            </ul>
            <a href="/Create" className="btn btn-primary">Click to make a new user</a>
        </div>
    )
}

export default Index