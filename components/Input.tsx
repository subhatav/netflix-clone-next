import { InputProps } from "@/types";

const Input: React.FC<InputProps> = ({ id, type, value, label, onChange }) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="
          text-md invalid:border-b-1 peer block w-full appearance-none
          rounded-md bg-neutral-700 px-6 pb-2
          pt-6 text-white focus:outline-none focus:ring-0
        "
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="
          text-md absolute left-6 top-3.5 z-10 origin-[0] -translate-y-3.5
          scale-75 transform text-zinc-400 duration-150
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
          peer-focus:-translate-y-3.5 peer-focus:scale-75
        "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
