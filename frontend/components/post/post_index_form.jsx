import React from 'react';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: "", 
      photoFile: null,
      photoUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({body: e.currentTarget.value});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    if (this.state.photoFile) {

      formData.append('post[photo]', this.state.photoFile);
    }
    // $.ajax({
    //   url: '/api/posts',
    //   method: 'POST',
    //   data: formData,
    //   contentType: false,
    //   processData: false
    // });
    this.props.createPost(formData);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState( {photoFile: file, photoUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const preview = this.state.photoURL ? <img src={this.state.photoUrl} /> : null;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" 
        value={this.state.body} 
        onChange={this.handleInput}/>
        <input type="file"
        onChange={this.handleFile}
        />
        <h3>Image preview </h3>
        {preview}
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

export default PostIndex;