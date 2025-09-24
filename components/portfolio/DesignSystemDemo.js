import { useState } from "react";
import Image from "next/image";

export default function DesignSystemDemo() {
  const [designTokens, setDesignTokens] = useState({
    variant: "primary",
    filled: true,
    size: "medium",
    icon: "FloppyDisc",
    label: "Save Changes",
  });

  const updateToken = (key, value) => {
    setDesignTokens((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const syntaxTheme = {
    property: "text-[#69C0FF]",
    boolean: "text-[#D285FF]",
    string: "text-[#ADDC5F]",
    component: "text-[#FA825A]",
  };

  const generateReactCode = () => {
    const lines = ["<Button"];
    lines.push(`variant="${designTokens.variant}"`);
    lines.push(`filled="${designTokens.filled}"`);
    lines.push(`size="${designTokens.size}"`);
    lines.push(`icon={${designTokens.icon}}`);
    lines.push(`label="${designTokens.label}"`);
    lines.push("/>");

    return lines;
  };

  const codeLines = generateReactCode();

  return (
    <div className="not-prose mt-8 lg:mt-0 flex flex-col md:flex-row gap-4 lg:gap-8 w-[400px] max-w-full md:w-[1000px] mx-auto">
      {/* Figma Panel */}
      <div className="w-full md:w-1/2 md:aspect-square p-8 lg:p-0 bg-white border border-gray-300 rounded-2xl flex items-center justify-center text-sm lg:text-base relative">
        <Image
          src="/portfolio-assets/logo-figma.svg"
          width="32"
          height="32"
          alt=""
          className="transform scale-75 md:scale-100 opacity-30 absolute top-5 right-3 lg:right-0 lg:left-3"
        />
        <div className="w-full md:max-w-[248px]">
          <p className="font-bold flex gap-2 items-center mb-3 text-neutral-800">
            <span>&#9671;</span>
            <span>Button</span>
          </p>

          <div className="flex flex-col gap-2 lg:gap-3">
            {/* Variant Dropdown */}
            <div className="w-full relative">
              <label className="flex items-center">
                <span className="flex-1 text-neutral-500">Variant</span>
                <select
                  value={designTokens.variant}
                  onChange={(e) => updateToken("variant", e.target.value)}
                  className="w-44 max-w-3/5 p-2 rounded border bg-white border-gray-300 text-neutral-800 hover:cursor-pointer appearance-none"
                >
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="tertiary">Tertiary</option>
                </select>
                <span className="pointer-events-none absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 6L8 11L13 6" stroke="#333333" />
                  </svg>
                </span>
              </label>
            </div>
            {/* Filled Toggle */}
            <div className="w-full relative">
              <label className="flex items-center w-full">
                <span className="flex-1 text-neutral-500">Filled</span>
                <input
                  type="checkbox"
                  checked={designTokens.filled}
                  onChange={(e) => updateToken("filled", e.target.checked)}
                  className="sr-only peer"
                />
                <div class="my-2 relative w-11 h-6 bg-gray-200 peer-focus:none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            {/* Size Dropdown */}
            <div className="w-full relative">
              <label className="flex items-center">
                <span className="flex-1 text-neutral-500">Size</span>
                <select
                  value={designTokens.size}
                  onChange={(e) => updateToken("size", e.target.value)}
                  className="w-44 max-w-3/5 p-2 rounded border bg-white border-gray-300 text-neutral-800 hover:cursor-pointer appearance-none"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                <span className="pointer-events-none absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 6L8 11L13 6" stroke="#333333" />
                  </svg>
                </span>
              </label>
            </div>
            {/* Icon Dropdown */}
            <div className="w-full relative">
              <label className="flex items-center">
                <span className="flex-1 text-neutral-500">Icon</span>
                <select
                  id="icon"
                  value={designTokens.icon}
                  onChange={(e) => updateToken("icon", e.target.value)}
                  className="w-44 max-w-3/5 p-2 rounded border bg-white border-gray-300 text-neutral-800 hover:cursor-pointer appearance-none"
                >
                  <option value="FloppyDisc">&#9671; FloppyDisc</option>
                  <option value="Download">&#9671; Download</option>
                  <option value="Upload">&#9671; Upload</option>
                  <option value="Settings">&#9671; Settings</option>
                </select>
              </label>
              <span className="pointer-events-none absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 6L8 11L13 6" stroke="#333333" />
                </svg>
              </span>
            </div>
            {/* Label Text Input */}
            <div className="w-full">
              <label className="flex items-center">
                <span className="flex-1 text-neutral-500">Label</span>
                <input
                  id="label"
                  type="text"
                  value={designTokens.label}
                  onChange={(e) => updateToken("label", e.target.value)}
                  className="w-44 max-w-3/5 p-2 rounded bg-gray-100 text-neutral-800"
                  maxlength="12"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* React Code Panel */}
      <div className="w-full md:w-1/2 md:aspect-square p-8 lg:p-0 bg-[#151720] border border-neutral-700 rounded-2xl flex justify-center items-center antialiased relative">
        <Image
          src="/portfolio-assets/logo-react.svg"
          width="32"
          height="32"
          alt=""
          className="transform scale-75 md:scale-100 opacity-30 absolute top-5 right-5 lg:right-0 lg:left-5"
        />
        <div className="leading-8 lg:leading-10 tracking-[0.5px] opacity-90 text-sm lg:text-base font-mono w-full md:max-w-[248px]">
          {codeLines.map((line, index) => (
            <div key={index}>
              <span className="text-neutral-500 mr-6">{index + 1}</span>
              <span className="text-neutral-300">
                {line === "<Button" && (
                  <>
                    <span>{"<"}</span>
                    <span className={syntaxTheme.component}>Button</span>
                  </>
                )}
                {line.includes("variant=") && (
                  <>
                    {"  "}
                    <span className={syntaxTheme.property}>variant</span>
                    <span>="</span>
                    <span className={syntaxTheme.string}>
                      {designTokens.variant}
                    </span>
                    <span>"</span>
                  </>
                )}
                {line.includes("filled=") && (
                  <>
                    {"  "}
                    <span className={syntaxTheme.property}>filled</span>
                    <span>="</span>
                    <span className={syntaxTheme.boolean}>
                      {designTokens.filled ? "true" : "false"}
                    </span>
                    <span>"</span>
                  </>
                )}
                {line.includes("size=") && (
                  <>
                    {"  "}
                    <span className={syntaxTheme.property}>size</span>
                    <span>="</span>
                    <span className={syntaxTheme.string}>
                      {designTokens.size}
                    </span>
                    <span>"</span>
                  </>
                )}
                {line.includes("icon=") && (
                  <>
                    {"  "}
                    {"  "}
                    <span className={syntaxTheme.property}>icon</span>
                    <span>{"={"}</span>
                    <span className={syntaxTheme.component}>
                      {designTokens.icon}
                    </span>
                    <span>{"}"}</span>
                  </>
                )}
                {line.includes("label=") && (
                  <>
                    {"  "}
                    <span className={syntaxTheme.property}>label</span>
                    <span>="</span>
                    <span className={syntaxTheme.string}>
                      {designTokens.label}
                    </span>
                    <span>"</span>
                  </>
                )}
                {line === "/>" && <span>{"/>"}</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
