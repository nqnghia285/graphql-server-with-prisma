import { gql } from "@apollo/client";

const CREATE_COMMENT = gql`
	mutation ($commentInput: CommentInput!) {
		createComment(commentInput: $commentInput) {
			isSuccess
			message
		}
	}
`;

export default CREATE_COMMENT;
