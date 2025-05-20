import { useState, useEffect, useReducer } from "react";
import { getCategories } from "../../../api/categories";
import CategoryList from "./CategoryList";
import SubCategoryList from "./SubCategoryList";
import TreatmentList from "./TreatmentList";

type Category = {
	id: number,
	name: string,
	has_subcategories: boolean,
};

type Props = {
	onSelectedCategory: (categoryId: string) => void;
};

type TreatmentStep = 'category' | 'subcategory' | 'treatment';

// Define interface
interface TreatmentState {
	step: TreatmentStep;
	selectedCategoryId: number | null;
	selectedSubcategoryId: number | null;
	hasSubCategories: boolean;
};

// Defining values to match the interface
const initialTreatmentState: TreatmentState = {
	step: "category",
	selectedCategoryId: null,
	selectedSubcategoryId: null,
	hasSubCategories: false,
};

// Define action union type to describe all possible actions
type TreatmentAction =
	| { type: "SELECT_CATEGORY"; payload: { categoryId: number; hasSubCategories: boolean } }
	| { type: "SELECT_SUBCATEGORY"; payload: { subcategoryId: number } }
	| { type: "GO_BACK" }
	| { type: "RESET" }

// Treatment reducer function to handle state changes
const treatmentReducer = (state: TreatmentState, action: TreatmentAction): TreatmentState => {
	switch (action.type) {
		case "SELECT_CATEGORY":
			return {
				...state,
				step: "subcategory",
				selectedCategoryId: action.payload.categoryId,
				hasSubCategories: action.payload.hasSubCategories,
				selectedSubcategoryId: null,
			};

		case "SELECT_SUBCATEGORY":
			return {
				...state,
				step: "treatment",
				selectedSubcategoryId: action.payload.subcategoryId,
			};

		case "GO_BACK":
			switch (state.step) {
				case "treatment":
					return {
						...state,
						step: "subcategory",
					};
				case "subcategory":
					return {
						...state,
						step: "category",
						selectedSubcategoryId: null,
					};
				default:
					return state;
			}

		case "RESET":
			return initialTreatmentState;

		default:
			return state;
	}
};

const TreatmentCategories = ({ onSelectedCategory }: Props) => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [state, dispatch] = useReducer(treatmentReducer, initialTreatmentState);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await getCategories();
				setCategories(response);
			} catch (error) {
				console.log("Error fetching treatment categories:", error);
			}
		};

		fetchCategories();
	}, []);

	return (
		<>
			<h2>Select a treatment category</h2>
			{state.step !== "category" && (
				<button onClick={() => dispatch({ type: "RESET" })}>
					Reset
				</button>
			)}

			{state.step === "category" && (
				<CategoryList
					categories={categories}
					onCategorySelect={(id, hasSubs) => {
						dispatch({
							type: "SELECT_CATEGORY",
							payload: { categoryId: id, hasSubCategories: hasSubs },
						});
						onSelectedCategory(String(id));
					}}
				/>
			)}
			{state.step === "subcategory" &&
			state.selectedCategoryId !== null &&
			state.hasSubCategories && (
				<SubCategoryList
					categoryId={state.selectedCategoryId}
					onSelectSubcategory={(subcategoryId) =>
						dispatch({
							type: "SELECT_SUBCATEGORY",
							payload: { subcategoryId },
						})
					}
				/>
			)}

			{state.step === "treatment" &&
			state.selectedCategoryId !== null &&
			state.selectedSubcategoryId !== null && (
				<TreatmentList
					categoryId={state.selectedCategoryId}
					subcategoryId={state.selectedSubcategoryId}
				/>
			)}

		</>
	);
};

export default TreatmentCategories;