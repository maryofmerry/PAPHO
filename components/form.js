import { useState, useEffect } from "react";

export default function EscapeForm(props) {

    const {answer, title, next, instruction} = props;

    const [correct, setCorrect] = useState(0);
    const [last, setLast] = useState(Date.now());
    const [time, setTime] = useState(Date.now());

    const [input, setInput] = useState("");

    useEffect(() => {
        const timerID = setInterval(() => setTime(Date.now()), 1000);
        return () => clearInterval(timerID);
    }, []);

    const allowed = (time - last) >= 3 * 1000;

    const submit = () => {
        if(!allowed) return;
        if (input.toLowerCase().split('').filter(a => a !== ' ').join('') === answer+'') {
            setCorrect(1);
        } else {
            setLast(Date.now());
            setCorrect(-1);
        }
    }

    const reset = () => {
        setCorrect(0);
        setInput('');
    }

    return correct <= 0 ? (
        <div className="flex flex-col text-center">
            <div className="text-sm italic mb-2">Escape Room</div>
            <div className="text-4xl font-bold mb-5">{title}</div>

            {instruction}

            <div className="flex justify-center mt-5">
                <input
                    type="text"
                    placeholder="Answer"
                    className={"bg-gray-200 px-3 py-2 rounded-md text-center outline-none " + (correct < 0 ? "border-2 border-red-500" : "")}
                    onChange={(e) => setInput(e.target.value)}
                    defaultValue={input}
                />
            </div>

            {correct < 0 && <div className="text-sm text-red-500 mt-2">The answer you submitted was incorrect. Please try again.</div>}

            <div>
                <div
                    className={
                        "mt-4 text-white inline-block py-2 px-5 rounded-xl transition-opacity bg-highlight "
                        + (allowed ? "cursor-pointer opacity-100" : "opacity-50 cursor-not-allowed")
                    }
                    onClick={submit}
                >
                    Submit!
                </div>
            </div>
        </div>
    ) : (
        <div className="flex flex-col text-center items-center">
            <div className="text-sm italic mb-2">Escape Room</div>
            <div className="text-4xl font-bold mb-5">{title}</div>

            <div className="mb-2 max-w-sm">Congrats! That was the correct answer.</div>

            <div className="mb-2 max-w-sm font-bold">{next}</div>

            <div className="mb-2 max-w-sm">
                Once you are done reading this, please click the following reset button
                so that you do not reveal this message to other groups.
            </div>

            <div>
                <div
                    className="mt-4 text-white inline-block py-2 px-5 rounded-xl bg-highlight cursor-pointer"
                    onClick={reset}
                >
                    Reset
                </div>
            </div>
        </div>
    )
    
}