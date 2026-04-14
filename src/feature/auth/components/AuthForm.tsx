import type { AuthFormInterface } from "../../../types/componentTypes";

export default function AuthForm({
  children,
  customCss,
  onSubmitForm,
  subTitle,
  isSubmitDisabled
}: AuthFormInterface) {
  return (
    <div className="bg-blue-400 flex justify-center items-center w-full h-screen select-none px-4 md:px-0">
      <div
        className={` bg-blue-50 rounded-xl shadow-xl w-full md:w-[500px]  flex flex-col items-center justify-center p-4`}
      >
        <div className="flex flex-col items-center mb-5">
          <img
            className="w-10 h-20"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
          />
          <p className="italic mt-[-10px]">{subTitle}</p>
        </div>

        <form className={`w-full  ${customCss}`} onSubmit={onSubmitForm}>
          {children}

          <button
            disabled={isSubmitDisabled}
            type="submit"
            className="disabled:bg-blue-300 disabled:cursor-not-allowed w-full text-center hover:bg-blue-400 bg-blue-500 text-white font-bold text-lg px-1 py-1 rounded-lg cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
