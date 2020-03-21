import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import { Alert } from "./Alert";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }
  changeInputHendler = e => {
    e.persist();
    this.setState(prev => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value
      }
    }));
  };

  submitHandler = e => {
    e.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      this.props.showAlert("enter some text");
    }

    const newPost = {
      title,
      id: Date.now().toString()
    };
    this.props.createPost(newPost);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="form-group">
          <label htmlFor="title">Head post</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHendler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          create
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = {
  createPost,
  showAlert
};

const mapStateToProps = state => ({
  alert: state.loader.alert
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
