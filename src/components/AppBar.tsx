import { useNavigate } from "@solidjs/router";
import { styled } from "solid-styled-components";

import { Button } from "./Button";

const AppBarContainer = styled.ul`
	padding: 10px 0;
	flex-wrap: wrap;
	display: flex;
	align-items: center;
	list-style: none;
	gap: 15px;
`;

const AppBarItem = styled.li`
	margin: 0;
	padding: 0;
`;

export function AppBar() {
	const navigate = useNavigate();

	return (
		<AppBarContainer>
			<AppBarItem>
				<Button onClick={() => navigate("/shuffle")}>full random</Button>
			</AppBarItem>
			<AppBarItem>
				<Button onClick={() => navigate("/bySchema")}>random by condition</Button>
			</AppBarItem>
			<AppBarItem>
				<Button onClick={() => navigate("/threads")}>threads list</Button>
			</AppBarItem>
			<AppBarItem>
				<Button onClick={() => navigate("/settings")}>settings</Button>
			</AppBarItem>
		</AppBarContainer>
	);
}
