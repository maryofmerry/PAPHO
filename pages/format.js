import CLASSES from "../scripts/classes.json";
import React from 'react';

const Topic = (props) => {

    return (
        <div className={`p-5 rounded-lg border-solid border-[2.5px] border-black`} >
            <div className="text-center font-medium"> {props.name} </div>
            <div className="text-xl text-center">{Array(props.stars).fill('★')}</div>
            <div className="italic text-sm text-center">Prerequisites: {props.prereqs}</div>
            {!!props.useful.length && <div className="italic text-xs text-center mt-1">Not Required, but Useful to Know: {props.useful}</div>}
            <div className="text-sm mt-4">{props.blurb}</div>
        </div>
    )
}


export default function Curriculum () {

    const blocks = [];
    let day = 1; let block = 2;
    for(let i = 0; i < 9; i++) { blocks.push([day,block]); block++; if(block === 3) { block = 1; day++; } };
    return (
        <div className="text-lg">
            <div className="text-4xl font-bold mb-5">Curriculum</div>

            <div>
                PAMS Math Camp offers topics in not only standard math curricula 
                but also in competition math and higher mathematics. (There will be an 
                escape room activity on Day 1 Block 1.)
                {/* <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/spreadsheets/d/1TlXZw7zvU3CRp7NG8a19Xr1EVq0gn03BrEEd_tpTq8Q/edit#gid=737497406"
                    className="underline"
                >
                    here
                </a>. */}
            </div>

            <div className="mb-10">
                {blocks.map(([day, block]) => <React.Fragment key={`${day}-${block}`}>
                    <div className="text-2xl font-semibold mb-1 mt-8 mb-2">Day {day} Block {block}</div>
                    <div className="grid xl:grid-cols-3 gap-5">
                        {CLASSES[`${day}-${block}`].map((c) => <Topic {...c} key={c.name} />)}
                    </div>
                </React.Fragment>)}
            </div>

            
        </div>
    )
}