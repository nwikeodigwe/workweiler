export const Info = () => {
  return (
    <div className="flex flex-col py-7 px-5 gap-4 border-b-2 border-jet/10">
      <h2 className="text-xl font-[500]">Company Information</h2>
      <table className="table-auto w-full">
        <tr className="border-b-1 border-jet/10">
          <th className="px-4 py-3 text-left font-medium">Location</th>
          <td className="px-4 py-3">Elmhurst, IL (Remote)</td>
        </tr>
        <tr className="border-b-1 border-jet/10">
          <th className="px-4 py-3 text-left font-medium">Industry</th>
          <td className="px-4 py-3">Staffing/Employment Agencies</td>
        </tr>
        <tr className="border-b-1 border-jet/10">
          <th className="px-4 py-3 text-left font-medium">Salary</th>
          <td className="px-4 py-3">$65,000–$70,000 Per Year</td>
        </tr>
        <tr className="border-b-1 border-jet/10">
          <th className="px-4 py-3 text-left font-medium">Company Size</th>
          <td className="px-4 py-3">100 to 499 employees</td>
        </tr>
        <tr className="border-b-1 border-jet/10">
          <th className="px-4 py-3 text-left font-medium">Year Founded</th>
          <td className="px-4 py-3">1984</td>
        </tr>
        <tr className="border-b-1 border-jet/10">
          <th className="px-4 py-3 text-left font-medium">Website</th>
          <td className="px-4 py-3">https://www.mitchellmartin.com</td>
        </tr>
      </table>
    </div>
  );
};
