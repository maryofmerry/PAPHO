import EscapeForm from "../../components/form";

export default function A2() {

    return (
        <EscapeForm 
            title="A1 and A2" 
            instruction="Submit the sum of your answer from A1 with your answer from A2."
            answer={26} 
            next="Proceed to A3; You will use exactly 11 matchsticks in that problem."
        />
    )
}