import { Link } from "react-router-dom";

type ButtonProps = {
	to: string; // button "to" required
	children: React.ReactNode; // button text
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	disabled?: boolean;
	classes?: string; // optional styles
};

const Button = ({
	to,
	children,
	type="button",
	onClick,
	disabled = false,
	classes = ""
}: ButtonProps) => {
	const defaultStyles = `
		${classes}
		playfair-600
		border
		border-white
		px-2
		h-10
		w-full
		max-w-36
		uppercase
		transition-colors
		ease-in
		hover:bg-white
		hover:text-primaryContent
	`;

	if(to && !disabled){
		return(
			<button
				type={type}
				className={defaultStyles}
			>
				<Link to={to} onClick={onClick}>
					{children}
				</Link>
			</button>
		);
	}

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={defaultStyles}
		>
			{children}
		</button>
	);
}

export default Button;