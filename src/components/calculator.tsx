import type React from "react";
import { useEffect, useState } from "react";

export const Calculator: React.FC = () => {
  const [members, setMembers] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (members > 0) setResult(members * 25 + "");
    else setResult("");
  }, [members]);
  return (
    <form className="grid grid-rows-4 grid-cols-8">
      <fieldset className="col-start-1 col-end-8 row-start-1 row-end-5 grid grid-rows-4 grid-cols-4 bg-sky-950 text-center text-sky-500 rounded-2xl">
        <label
          htmlFor="members"
          className="text-xl row-start-2 col-start-2 col-end-4"
        >
          عدد الأفراد
        </label>
        <input
          className="border-sky-500 border-2 rounded-md p-2 bg-transparent text-center row-start-3 col-start-2 col-end-4"
          value={members}
          onChange={(e) => setMembers(parseInt(e.target.value))}
          type="number"
          min={0}
        />
      </fieldset>
      <fieldset className="col-start-7 col-end-9 row-start-2 row-end-4 flex flex-col justify-evenly aspect-square bg-white rounded-2xl shadow-md">
        <span className="text-sky-500 text-center">الزكاة</span>
        <span className="text-center">{result}</span>
      </fieldset>
      <span className="text-xs text-center row-start-4 self-center text-sky-500">
        ريال
      </span>
    </form>
  );
};
