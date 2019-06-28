import React from 'react';
import './upload.css';

class UploadFile extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {file: '', msg: ''};
	}
	
	onFileChange = (event) => {
		this.setState({
			file: event.target.files[0]
		});
	}
	
	uploadFileData = (event) => {
		event.preventDefault();
		this.setState({msg: ''});

		let data = new FormData();
		data.append('file', this.state.file);

		fetch('http://localhost:8080/upload', {
			method: 'POST',
			body: data
		}).then(response => {
			this.setState({msg: "File successfully uploaded"});
		}).catch(err => {
			this.setState({error: err});
		});

	}
	
	render() {
		return (
			<div id="container">
				<h1>File Upload Example using React</h1>
				<h3>Upload a File</h3>
				<h4>{this.state.msg}</h4>
				<input onChange={this.onFileChange} type="file"></input>
				<button disabled={!this.state.file} onClick={this.uploadFileData}>Upload</button>
			</div>
		)
	}

}

export default UploadFile;
