import { AnalyzerPrototype } from "@/components/analyzer-prototype";
import { Footer, PageHeader, PublicHeader, Steps } from "@/components/wireframe";

export default function AnalysisPage() {
  return <><PublicHeader /><main><PageHeader eyebrow="analisis · langkah 1 dari 3" title="Apa yang ingin diperiksa?" description="Pilih jenis bahan. CERNO akan menggabungkan sinyal yang relevan dan menjelaskan dasar penilaiannya." /><div className="mx-auto max-w-[1180px] px-5 py-6 sm:py-10"><Steps current={1} /><div className="mt-6"><AnalyzerPrototype /></div></div></main><Footer /></>;
}
