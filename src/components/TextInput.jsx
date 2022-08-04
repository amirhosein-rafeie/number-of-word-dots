import { memo } from "react";

const TextInput = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <label className="custom-field">
        <input
          aria-multiline
          type="text"
          required
          value={value}
          onChange={onChange}
        />
        <span className="placeholder">متن رو بنویس</span>
      </label>
    </div>
  );
};

export default memo(TextInput);
