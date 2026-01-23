"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import properties from "../Properties.json"; // your product data



const families = [
  "electronics",
  "fasion",
  "Official",
  "Jewelry",
  "Education",
  "Utensils",
];



const sortOptions = [
  { name: "ELECTRONICS", href: "#electronics", current: true },
  { name: "FASION", href: "#fasion", current: false },
  { name: "OFFICIAL", href: "#Official", current: false },
  { name: "JEWELRY", href: "#Jewelry", current: false },
  { name: "EDUCATION", href: "#Education", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="text-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full bg-blue-950"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 flex size-10 items-center justify-center"
                >
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Mobile Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium">
                  {families.map((family) => (
                    <li key={family}>
                      <a href={`#${family}`} className="block px-2 py-3">
                        {family}
                      </a>
                    </li>
                  ))}
                </ul>
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight">Categories</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="group inline-flex justify-center text-sm font-medium hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute  right-0 z-10 mt-2 w-40 origin-top-right rounded-md shadow-2xl ring-1 ring-blue/2 focus:outline-hidden"
                >
                  <div className="py-1 text-white">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-white"
                              : "text-white-gray-500",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 hover:text-gray-500 sm:ml-7"
              >
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            {families.map((family) => (
              
              <div key={family} className="mb-10" id={family}>
              

                <h2 className="text-2xl font-bold text-amber-300 mb-4">
                  {family}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {properties
                    .filter((item) => item.family === family)
                    .map((property) => (
                      <div
                        key={property.id}
                        className="bg-black shadow-md rounded-xl flex flex-col items-center justify-between p-5 mt-8 relative"
                      >
                        <div className="w-full h-36 flex items-center justify-center bg-gray-100 rounded-md">
                          <img
                            src={property.picture}
                            alt={property.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>

                        <p className="text-sm font-semibold text-center mt-2 text-white">
                          {property.name} {property.storage}
                        </p>

                        <p className="text-blue-600 font-bold text-lg mt-1">
                          {property.Price}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
