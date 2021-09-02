import { gql } from "@apollo/client";

const GET_SONGS = gql`
	query ($offset: Int!, $limit: Int!) {
		getSongs(offset: $offset, limit: $limit) {
			id
			title
			genre
			src
			author
			releaseYear
			createdAt
			updatedAt
		}
	}
`;

export default GET_SONGS;
