import Breadcrumb from "@/components/Breadcrumb";

export default function MoreWorkHeader({ title }) {
  return (
    <header>
      <div className="container">
        <div className="flex flex-col gap-6 items-center">
          <Breadcrumb
            parentPageUrl="/portfolio"
            parentPageLabel="Portfolio"
            activePageLabel="More Work"
          />
          <h1 className="h2">{title}</h1>
        </div>
      </div>
    </header>
  );
}
