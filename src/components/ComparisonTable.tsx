import { Check, X } from "lucide-react";
import { comparisonData } from "@/data/comparisonData";

const ComparisonTable = () => {
  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-6 h-6 text-primary mx-auto stroke-[2.5]" />
      ) : (
        <X className="w-6 h-6 text-muted-foreground/30 mx-auto" />
      );
    }
    return <span className="text-foreground font-medium">{value}</span>;
  };

  return (
    <section className="py-24 lg:py-32 bg-foreground">
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold text-background mb-4">
            Сравнение комплектаций
          </h2>
          <p className="text-lg lg:text-xl font-body text-background/60">
            Детальное сравнение комплектаций Base и Optimum
          </p>
        </div>

        {/* Table */}
        <div className="max-w-4xl mx-auto bg-background border border-border overflow-hidden shadow-xl overflow-x-auto">
          {/* Table Header */}
          <div className="grid grid-cols-[minmax(120px,2fr)_minmax(90px,1fr)_minmax(90px,1fr)] lg:grid-cols-3 min-w-[320px]">
            <div className="p-2 sm:p-3 lg:p-6 font-heading font-semibold text-foreground text-xs sm:text-sm lg:text-lg bg-background">
              Позиция
            </div>
            <div className="p-2 sm:p-3 lg:p-6 text-center border-l border-border bg-table-base">
              <div className="font-heading font-semibold text-foreground text-xs sm:text-sm lg:text-lg">Base</div>
            </div>
            <div className="p-2 sm:p-3 lg:p-6 text-center border-l border-border bg-table-optimum">
              <div className="font-heading font-semibold text-foreground text-xs sm:text-sm lg:text-lg">Optimum</div>
            </div>
          </div>

          {/* Table Body */}
          {comparisonData.map((section) => (
            <div key={section.title}>
              {/* Section Header */}
              <div className="grid grid-cols-[minmax(120px,2fr)_minmax(90px,1fr)_minmax(90px,1fr)] lg:grid-cols-3 border-t border-border min-w-[320px]">
                <div className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 bg-background">
                  <span className="text-[10px] sm:text-xs lg:text-base font-body font-semibold text-primary uppercase tracking-wider">
                    {section.title}
                  </span>
                </div>
                <div className="border-l border-border bg-table-base"></div>
                <div className="border-l border-border bg-table-optimum"></div>
              </div>

              {/* Section Items */}
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-[minmax(120px,2fr)_minmax(90px,1fr)_minmax(90px,1fr)] lg:grid-cols-3 border-t border-border min-w-[320px]"
                >
                <div className="p-2 sm:p-3 lg:p-5 lg:px-6 font-body font-medium text-[11px] sm:text-xs lg:text-base text-foreground bg-background break-words">
                    {item.name}
                  </div>
                  <div className="p-2 sm:p-3 lg:p-5 lg:px-6 text-center border-l border-border bg-table-base text-[11px] sm:text-xs lg:text-base">
                    {renderValue(item.baseValue)}
                  </div>
                  <div className="p-2 sm:p-3 lg:p-5 lg:px-6 text-center border-l border-border bg-table-optimum text-[11px] sm:text-xs lg:text-base">
                    {renderValue(item.optimumValue)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
