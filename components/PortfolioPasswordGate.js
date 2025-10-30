import React, { useEffect, useRef } from "react";

export default function PortfolioPasswordGate({
  password,
  setPassword,
  error,
  onSubmit,
}) {
  const containerRef = useRef(null);
  const passwordInputRef = useRef(null);
  const submitButtonRef = useRef(null);

  // Focus trap effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'input, button, a, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus the password input when the component mounts
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col py-12 xl:py-20">
      <div className="flex flex-col mt-12">
        <h1 className="h4 flex flex-row items-center space-x-2 mb-4">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 11.5V3L7.75 2.2L2 3V11.5L7.75 15.5L13.5 11.5Z"
              stroke="currentColor"
              stroke-width="2.5"
            />
            <path d="M7.75 5.5V10.5" stroke="currentColor" stroke-width="2.5" />
          </svg>
          <span>This case study is protected</span>
        </h1>
        <form onSubmit={onSubmit} className="relative w-80">
          <label htmlFor="password" className="sr-only">
            Enter Password
          </label>
          <input
            ref={passwordInputRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autocomplete="off"
            data-1p-ignore
            data-lpignore="true"
            data-protonpass-ignore="true"
            className="w-80 border bg-white dark:bg-black border-neutral-300 dark:border-neutral-800 rounded-md p-4 pr-14 outline-hidden focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-800 focus:ring-offset-2 placeholder:text-muted"
          />
          <button
            ref={submitButtonRef}
            type="submit"
            className={`font-display absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xs text-2xl font-semibold outline-hidden focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-800 focus:ring-offset-2 cursor-pointer transition-opacity duration-100 ${
              password ? "opacity-100" : "opacity-40"
            }`}
          >
            <span className="sr-only">Submit</span>→
          </button>
        </form>
        <div className="h-6">
          {error && (
            <p className="text-red-700 dark:text-red-400 text-sm mt-2">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
