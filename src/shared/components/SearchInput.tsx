import { Search } from "iconoir-react";

export default function SearchInput() {
  return (
    <div className="w-full relative ">
      <input
        className="w-full rounded-md border-0 px-2 pl-8.5 py-2 outline-0 bg-gray-200"
        type="text"
        placeholder="Search here..."
      />
      <Search className="absolute left-1 top-2 text-gray-500" />
    </div>
  );
}
