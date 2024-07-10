import EscapeForm from "../../components/form";

export default function B() {

    return (
        <EscapeForm
            title="B"
            instruction="Submit your answer to B here."
            answer={1}
            next="You're done with part B! Your answer of 1 is the third number of the combination."
        />
    )
}