import React from 'react';

class EditPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.post.id,
      author_id: this.props.currentUser.id,
      body: this.props.post.body,
      photoFile: this.props.post.photoFile,
      photoUrl: this.props.post.photoUrl
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePost(this.state)
      .then(() => this.props.fetchUser(this.state.author_id))
      .then(() => this.props.history.push('/profile'));
  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <div className="upload-container">
        <div className="upload-title">
          <h3>Edit Post</h3>
          <label htmlFor="upload-file-upload" className="upload-post-file">
            <i className="far fa-plus-square"></i>
          </label>
        </div>
        <div className="upload-preview">
          {preview}
        </div>
        <form className="upload-form" onSubmit={this.handleSubmit}>
          <div className="upload-body">
            <textarea type="text"
              value={this.state.body}
              onChange={this.handleInput}
              placeholder="Write a caption..."></textarea>
          </div>
          <div className="upload-submit-button">
            <input type="submit" value="Update" />
          </div>
        </form>
      </div>
    );
  }

}

export default EditPostForm;