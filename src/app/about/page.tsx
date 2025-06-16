import AboutExtended from "@/components/layout/AboutExtended";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper className="bg-light-ivory">
      <AboutExtended />
      <Footer />
    </PageWrapper>
  );
}
