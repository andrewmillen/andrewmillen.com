export default function ProblemStatement({ headline, content }) {
  return (
    <div className="pb-0 xl:pb-12 2xl:pb-24">
      <p className="h4 mb-2 mt-0!">The Problem</p>
      <div className="flex flex-col max-w-2xl lg:max-w-none lg:flex-row lg:space-x-20">
        <div className="lg:w-1/2">
          <h2 className="text-2xl! leading-tight! mt-0!">{headline}</h2>
        </div>
        <div className="lg:w-1/2">
          <p className="mt-0!">{content}</p>
        </div>
      </div>
    </div>
  );
}
