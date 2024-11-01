interface SelectProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
  }
  
  export const Select: React.FC<SelectProps> = ({ label, value, onChange, options }) => (
    <div className="flex items-center gap-2">
      <label className="font-medium">{label}:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded p-2"
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );