import { useTranslations } from "next-intl";

export default function MySelect({ options = [], placeholder, name, value, onChange }) {
  const t = useTranslations();

  const handleChange = (e) => {
    const selected = options.find(opt => opt.value === e.target.value);
    onChange(selected); // повертаємо об'єкт {label, value}
  };

  return (
    <select name={name} value={value?.value || ''} onChange={handleChange}>
      <option value="" disabled>
        {placeholder}
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {t(option.label)}
        </option>
      ))}
    </select>
  );
}
