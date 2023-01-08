import { JSX } from "solid-js";
import { styled } from "solid-styled-components";

const ButtonWrapper = styled.button`
	background-color: rgb(54, 54, 54);
	text-decoration: none;
	cursor: pointer;
	font: inherit;
	padding: 0 10px;
	height: 30px;
	border: none;
	color: rgb(255, 255, 255);
	border-radius: 6px;
	transition: 0.4s;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: rgb(63, 63, 63);
	}
`;

export function Button(props: JSX.BaseHTMLAttributes<HTMLButtonElement>) {
	return <ButtonWrapper {...props} />;
}
