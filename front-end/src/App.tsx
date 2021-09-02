import React, { ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import UPLOAD_FILE from "./apollo_client/mutation/Song/CreateSong";
import { useMutation } from "@apollo/client";

function App() {
	let file: File | null;

	function changeFile(e: ChangeEvent<HTMLInputElement>) {
		const files = e.target.files;
		file = files ? files[0] : null;
		console.log(file);
	}

	const [upload] = useMutation(UPLOAD_FILE, {
		errorPolicy: "all",
		fetchPolicy: "no-cache",
		onCompleted: (data) => {
			console.log(data);
		},
	});

	function uploadFile() {
		upload({
			variables: {
				uploadInput: {
					title: "File name",
					file: file,
				},
			},
		});
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<input type="file" onChange={changeFile} />
				<button onClick={uploadFile}>Upload</button>
			</header>
		</div>
	);
}

export default App;
