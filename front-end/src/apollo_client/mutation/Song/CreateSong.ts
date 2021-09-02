import { gql } from "@apollo/client";
const UPLOAD_FILE = gql`
	mutation ($uploadInput: UploadInput!) {
		uploadFile(uploadInput: $uploadInput)
	}
`;

export default UPLOAD_FILE;
