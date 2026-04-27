"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "The Modern Account Writes APIs",
    story:
      "Capital One's first Credit Card Accounts Writes API modernized from SOAP to REST API. I owned it end-to-end from day one: Golang application logic, OAuth2 security, AWS CDK infrastructure, OpenTelemetry observability, component testing, and K6 performance testing. Zero to production-hardened in 4 months.",
    tags: ["Golang", "AWS CDK", "OAuth2", "OpenTelemetry", "K6"],
  },
  {
    title: "The Fargate Migration",
    story:
      "Lambda couldn't meet our SLAs. I benchmarked both environments and demonstrated 5–10× better P95 latency on Fargate, built the CDK infrastructure with distroless containers and graceful shutdown logic, and presented the findings to leadership. The result: an org-wide architecture decision and an unblocked service.",
    tags: ["AWS Fargate", "AWS Lambda", "Docker", "AWS CDK", "Performance"],
  },
  {
    title: "The Memory Leak",
    story:
      "Containers were crashing under sustained load during endurance testing. I used pprof to profile 10,000+ concurrent requests, traced the leak to unclosed response bodies in nested logging middleware, and eliminated OOM crashes entirely.",
    tags: ["Golang", "pprof", "Debugging", "Observability"],
  },
  {
    title: "Performance Testing Architecture",
    story:
      "Our API had zero performance test coverage and no clear path to get there — K6 is Capital One's mandated load testing tool, but K6 and Golang are natively incompatible runtimes. I evaluated four architectural patterns, designed a bridging solution between the two, and ported AES-GCM encryption with verified cipher parity so auth behaved identically under load. Engineers can now run complex load tests in under an hour.",
    tags: ["K6", "Golang", "AES-GCM", "Load Testing"],
  },
  {
    title: "The AI Tooling Repository",
    story:
      "Five modernization teams, no standardized way to build or share AI tools. I socialized the idea, built the repository structure, wrote the symlink integration system, and got org-wide adoption. A contributed multi-agent workflow now cuts API modernization effort from 2 weeks to half a day.",
    tags: ["LangGraph", "Multi-agent", "Python", "AI/ML"],
  },
  {
    title: "The Pipeline Debug",
    story:
      "A silent Docker artifact-mapping failure in Capital One's central deployment pipeline was blocking teams across the entire tech tower. I diagnosed it from source code alone, engineered a workaround, and shared findings that unblocked multiple teams.",
    tags: ["Docker", "CI/CD", "Debugging"],
  },
];

const research = [
  {
    professor: "Prof. Pete Kyle",
    institution: "Robert H. Smith School of Business, UMD",
    description:
      "Optimized a financial market order book simulation by migrating NumPy/Pandas data structures to PyTorch, improving computational throughput for high-frequency trading research.",
  },
  {
    professor: "Prof. Serhiy Kozak",
    institution: "Robert H. Smith School of Business, UMD",
    description:
      "Built an automated OCR pipeline digitizing 4,000+ noisy historical financial articles using Tesseract, docTr, and EasyOCR; benchmarked 15B–70B parameter LLMs (Llama, Command-R, Mixtral) to support historical financial dataset digitization.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const ExperienceSection = () => {
  return (
    <section className="w-full">
      {/* Section heading */}
      <h2 className="text-3xl text-center text-[#7de2d1] mb-3">Experience</h2>
      <p className="text-center text-[#fffafb] opacity-50 text-xs uppercase tracking-widest mb-8">
        Capital One &middot; Software Engineer &middot; 2024–Present
      </p>

      {/* Story cards — 1 col on mobile, 2 col on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="bg-[#131515] rounded-lg p-6 flex flex-col gap-3"
          >
            <h3 className="text-lg font-semibold text-[#7de2d1]">{exp.title}</h3>
            <p className="text-sm text-[#fffafb] leading-relaxed flex-1">{exp.story}</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-[#339989]/20 text-[#7de2d1]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Research subsection */}
      <div className="mt-12 pt-8 border-t border-[#339989]/30">
        <h3 className="text-xl text-center text-[#7de2d1] mb-6">Research</h3>
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          {research.map((r, i) => (
            <motion.div
              key={r.professor}
              custom={i + 6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="flex flex-col gap-1"
            >
              <span className="text-[#7de2d1] font-medium">{r.professor}</span>
              <span className="text-xs text-[#fffafb] opacity-50 mb-1">{r.institution}</span>
              <p className="text-sm text-[#fffafb] leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
