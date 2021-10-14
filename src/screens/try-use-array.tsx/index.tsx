// import React, {useState} from "react";
import { useArray } from "utils";

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);
  return (
    <div>
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>
      &nbsp;
      <button onClick={() => removeIndex(0)}>remove 0</button>&nbsp;
      <button onClick={clear}>clear</button>
      <div>
        {value.map((person, index) => (
          <div key={index}>
            <span style={{ color: "#f00" }}>{index}</span>&nbsp; 姓名：
            <span>{person.name}</span>&nbsp; 年龄：<span>{person.age}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
