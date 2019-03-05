import React from 'react';
import Footer from '../footer/footer';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      body: "",
      photoFile: null,
      photoUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    this.props.createPost(formData)
    .then(() => this.props.fetchUser(this.state.author_id))
    .then(() => this.props.history.push('/profile'));
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <div className="upload-container">
        <div className="upload-title">
          <h3>New Post</h3>
          <label htmlFor="upload-file-upload" className="upload-post-file">
            <i className="far fa-plus-square"></i>
          </label>
          <div className="upload-file">
            <input id="upload-file-upload" type="file"
              onChange={this.handleFile}
            />
          </div>
        </div>
        <div className="upload-preview">
          {preview}
        </div>
        <form className="upload-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="upload-body">
            <textarea type="text"
              value={this.state.body}
              onChange={this.handleInput}
              placeholder="Write a caption..."></textarea>
          </div>
          <div className="upload-submit-button">
            <input type="submit" value="Share" disabled={!this.state.photoUrl} />
          </div>
        </form>
        <Footer />
      </div>
    );
  }

}

export default UploadForm;