import EscapeForm from "../../components/form";

export default function B3() {

    return (
        <EscapeForm
            title="B"
            instruction="What is B?"
            answer={34}
            next="You are done with Part B! You are right: B=34."
        />
    )
}