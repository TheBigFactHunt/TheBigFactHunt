import React, {Component} from "react";
import "../support/support.css";
import axios from "axios";

class Support extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: "",
            status: "Submit"
        };
    }

    handleChange(event) {
        const field = event.target.id;
        if (field === "name") {
          this.setState({ name: event.target.value });
        } else if (field === "email") {
          this.setState({ email: event.target.value });
        } else if (field === "message") {
          this.setState({ message: event.target.value });
        }
      }

      handleSubmit(event) {
        event.preventDefault();  
        this.setState({ status: "Sending" });  
        axios({
          method: "POST",
          url: "http://localhost:5000/contact",
          data: this.state,
        }).then((response) => {
          if (response.data.status === "sent") {
            alert("Message Sent");
            this.setState({ name: "", email: "", message: "", status: "Submit" });
          } else if (response.data.status === "failed") {
            alert("Message Failed");
          }
        });
      }

    render() {
        let buttonText = this.state.status;
        return (      
            <form className="supportForm" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div>
                <p id="name">Name</p>
                <label htmlFor="name"></label>
                <input
                    type="text"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                    required
                />
                </div>
                <div>
                <p id="email">Email</p>
                <label htmlFor="email"></label>
                <input
                    type="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                    required
                />
                </div>
                <div>
                <p id="message">Message</p>
                <label htmlFor="message"></label>
                <textarea
                    id="message"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                    required
                />
                </div>
                <a id="submit" href="/">{buttonText}</a>
            </form>      
        );
    }
}

export default Support; 