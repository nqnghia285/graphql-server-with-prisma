import { gql } from "@apollo/client";

const LOGIN = gql`
	query ($loginInput: LoginInput!) {
		login(loginInput: $loginInput) {
			isSuccess
			message
		}
	}
`;

export default LOGIN;
