import { EyeClosed, EyeSolid } from "iconoir-react";
import type { InputTypes, InputInterface } from "../../types/componentTypes";
import { useEffect, useState } from "react";

interface ExtendedInput extends InputInterface {
  customClass?: string;
  labelName: string;
}

function InputConfig({
  type,
  placeholder,
  inputName,
  onInputChange,
}: InputInterface) {
  return (
    <input
      type={type}
      name={inputName}
      placeholder={placeholder}
      onChange={(e) => onInputChange(e.target.value, inputName)}
      className="border border-gray-300 p-1 w-full pl-1 select-none"
    />
  );
}

export default function Input({
  type,
  placeholder,
  customClass,
  labelName,
  inputName,
  onInputChange,
}: ExtendedInput) {
  const [isViewPassword, setViewPassword] = useState(false);
  const [toggleType, setToggleType] = useState<InputTypes>("password");

  useEffect(() => {
    if (type === "password") {
      setToggleType(isViewPassword ? "text" : "password");
    } else setToggleType(type);
  }, [isViewPassword]);

  return (
    <div
      className={` ${customClass} grid grid-cols-1 gap-2 my-2 sm:grid-cols-[90px_1fr]  `}
    >
      <label className="font-medium text-lg text-center md:text-left">
        {labelName}{" "}
      </label>

      <div className="relative">
        
        <InputConfig
          onInputChange={onInputChange}
          inputName={inputName}
          type={toggleType}
          placeholder={placeholder}
        />

        {type === "password" ? (
          <>
            <EyeSolid
              className={`absolute top-2 right-2 cursor-pointer ${isViewPassword ? "" : "hidden"}`}
              onClick={() => setViewPassword(false)}
            />
            <EyeClosed
              className={`absolute top-2 right-2 cursor-pointer ${isViewPassword ? "hidden" : ""}`}
              onClick={() => setViewPassword(true)}
            />
          </>
        ) : (
          ""
        )}


      </div>
    </div>
  );
}
