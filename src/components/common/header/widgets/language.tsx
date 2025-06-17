const Language = () => {
  return (
    <select
      name="language"
      id="language"
      className="appearance-none focus:outline-none"
    >
      <option selected value="english">
        English
      </option>
      <option value="dutch">Dutch</option>
    </select>
  );
};

export default Language;
