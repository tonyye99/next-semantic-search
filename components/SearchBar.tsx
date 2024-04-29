"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const currentQuery = useSearchParams().get("query") || "";
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(currentQuery);
  const router = useRouter();
  const [isSearching, startTransition] = useTransition();

  function search() {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  }

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target && e.target !== inputRef.current) {
        console.log("not");
      }
    });
  }, []);

  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      {/* <p className="text-sm text-gray-700 font-light px-2"> */}
      {/*   Try something like - Men Clothes, Jackets, and outer coverings */}
      {/* </p> */}
      <div className="relative h-14 z-10 rounded-md">
        <Input
          disabled={isSearching}
          ref={inputRef}
          value={query}
          className="absolute inset-0 h-full"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search();
            }
            if (e.key === "Escape") {
              inputRef?.current?.blur();
            }
          }}
        />

        <Button
          size="sm"
          disabled={isSearching}
          onClick={search}
          className="absolute right-0 inset-y-0 h-full rounded-l-none"
        >
          <Search className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
