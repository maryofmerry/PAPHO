import React from "react";

const ScheduleItem = (props: { start: string, end: string, children: string }) => {
  return (
    <div className="md:text-lg">
      <span className="font-bold">{">"}{props.start}-{props.end}:</span> {props.children}
    </div>
  );
};
// Usage in another component
const ScheduleComponent = () => {
  return (
    <div className="flex flex-col items-center ">
        <ScheduleItem start="8:30" end="9:15">Registration</ScheduleItem>
        <ScheduleItem start="9:30" end="10:40">Individual Round</ScheduleItem>
        <ScheduleItem start="10:40" end="12:00">Team Round</ScheduleItem>
        <ScheduleItem start="12:10" end="13:00">Lunch</ScheduleItem>
        <ScheduleItem start="13:00" end="14:20">Guts Round</ScheduleItem>
        <ScheduleItem start="14:30" end="15:45">Activities / Tiebreaks</ScheduleItem>
        <ScheduleItem start="16:00" end="16:30">Awards Ceremony</ScheduleItem>
    </div>
  );
};

export default ScheduleComponent;
