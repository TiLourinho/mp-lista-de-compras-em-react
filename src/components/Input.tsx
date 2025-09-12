type InputProps = {
  label: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, id, value, onChange }: InputProps) {
  return (
    <div className="flex-shrink">
      <label htmlFor={id} className="block text-xs text-slate-400">
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
      />
    </div>
  );
}

export default Input;
