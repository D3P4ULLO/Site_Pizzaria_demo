import { useState, useRef, useEffect } from "react";
import * as Styles from "./CustomSelect.styles";

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((o) => o.value === value)?.label || placeholder || "Selecione";

  return (
    <Styles.Wrapper ref={ref}>
      <Styles.Trigger
        type="button"
        $open={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {selectedLabel}
      </Styles.Trigger>

      {open && (
        <Styles.Dropdown>
          {options.map((opt) => (
            <Styles.Option
              key={opt.value}
              $active={opt.value === value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </Styles.Option>
          ))}
        </Styles.Dropdown>
      )}
    </Styles.Wrapper>
  );
}
