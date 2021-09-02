import { gql } from "@apollo/client";

const GET_USERS = gql`
	query ($getOptions: GetOptions!) {
		getUsers(getOptions: $getOptions) {
			id
			fullName
			gender
			email
			role
			info {
				id
				fullName
				email
				role
			}
			createdAt
			updatedAt
		}
	}
`;

export default GET_USERS;
