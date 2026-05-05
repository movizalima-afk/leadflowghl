import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { TradesGrid } from "@/components/site/TradesGrid";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { Guarantee } from "@/components/site/Guarantee";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
import { CtaBlock } from "@/components/site/CtaBlock";

const Index = () => (
  <Layout>
    <Hero />
    <TradesGrid />
    <Problem />
    <Solution />
    <Guarantee />
    <Process />
    <Pricing />
    <CtaBlock />
  </Layout>
);

export default Index;
