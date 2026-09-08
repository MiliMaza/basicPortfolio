import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 lg:pl-48"
      >
        <div className="max-w-4xl">
          <p className="font-technical text-xs text-text-muted tracking-widest uppercase mb-6">
            Full-Stack Developer
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-800 leading-[0.9] tracking-tight text-text-primary">
            MILI
          </h1>
          <div className="mt-8 space-y-3">
            <p className="font-body text-lg text-text-secondary">
              <span className="font-technical text-xs text-text-muted mr-3">
                Currently
              </span>
              Building AI workflows & full-stack products
            </p>
            <p className="font-body text-lg text-text-secondary">
              <span className="font-technical text-xs text-text-muted mr-3">
                Previously
              </span>
              Professional basketball
            </p>
            <p className="font-body text-lg text-text-secondary">
              <span className="font-technical text-xs text-text-muted mr-3">
                Always
              </span>
              Learning, shipping, iterating
            </p>
          </div>
          <a
            href="#projects"
            className="inline-block mt-12 font-technical text-sm text-accent-primary hover:text-text-primary transition-colors duration-300 group"
          >
            See what I&apos;ve built{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="min-h-screen flex items-center px-6 lg:px-24 lg:pl-48 py-24"
      >
        <div className="max-w-3xl">
          <p className="font-technical text-xs text-text-muted tracking-widest mb-8">
            02 — About
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-700 leading-tight tracking-tight mb-12">
            A non-linear path
          </h2>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed font-body">
            <p>
              I studied Computer Science, played professional basketball for
              several years, and somewhere along the way became the kind of
              developer who builds AI platforms before breakfast.
            </p>
            <p>
              My path doesn&apos;t follow the standard trajectory — and
              that&apos;s the point. I bring a competitor&apos;s discipline, a
              builder&apos;s curiosity, and an engineer&apos;s precision to
              everything I ship.
            </p>
            <p>
              Based in Argentina. Building with React, Next.js, TypeScript, and
              whatever tool solves the problem best.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen px-6 lg:px-24 lg:pl-48 py-24"
      >
        <p className="font-technical text-xs text-text-muted tracking-widest mb-8">
          03 — Work
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-700 leading-tight tracking-tight mb-16">
          Selected projects
        </h2>
        <div className="space-y-12">
          {/* Placeholder cards — will be replaced in Phase 2 */}
          <div className="border border-border rounded-sm p-8 lg:p-12 hover:border-border-hover transition-colors duration-300 max-w-4xl">
            <span className="font-technical text-xs text-text-muted">01</span>
            <h3 className="font-display text-3xl font-700 mt-2">ASKA FLOW</h3>
            <p className="font-body text-text-secondary mt-3">
              AI platform for creating and deploying n8n workflows
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="font-technical text-xs text-accent-secondary px-2 py-1 border border-border rounded-sm">
                AI/LLM
              </span>
              <span className="font-technical text-xs text-accent-secondary px-2 py-1 border border-border rounded-sm">
                n8n
              </span>
              <span className="font-technical text-xs text-accent-secondary px-2 py-1 border border-border rounded-sm">
                Full-Stack
              </span>
            </div>
          </div>

          <div className="border border-border rounded-sm p-8 lg:p-12 hover:border-border-hover transition-colors duration-300 max-w-2xl lg:ml-24">
            <span className="font-technical text-xs text-text-muted">02</span>
            <h3 className="font-display text-2xl font-700 mt-2">
              THE ARCHIVE
            </h3>
            <p className="font-body text-text-secondary mt-3">
              Personal basketball career archive & interactive timeline
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="font-technical text-xs text-accent-secondary px-2 py-1 border border-border rounded-sm">
                Frontend
              </span>
              <span className="font-technical text-xs text-accent-secondary px-2 py-1 border border-border rounded-sm">
                Design
              </span>
            </div>
          </div>

          <div className="border border-border rounded-sm p-8 lg:p-12 hover:border-border-hover transition-colors duration-300 max-w-xl">
            <span className="font-technical text-xs text-text-muted">03</span>
            <h3 className="font-display text-xl font-700 mt-2">MED VAULT</h3>
            <p className="font-body text-text-secondary mt-3">
              Medical-focused web application for data organization
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="font-technical text-xs text-accent-secondary px-2 py-1 border border-border rounded-sm">
                Full-Stack
              </span>
              <span className="font-technical text-xs text-accent-secondary px-2 py-1 border border-border rounded-sm">
                UX
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="min-h-screen flex items-center px-6 lg:px-24 lg:pl-48 py-24"
      >
        <div className="w-full max-w-5xl">
          <p className="font-technical text-xs text-text-muted tracking-widest mb-8">
            04 — Skills
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-700 leading-tight tracking-tight mb-16">
            Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                category: "Frontend",
                items: [
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                ],
              },
              {
                category: "Backend",
                items: ["Node.js", "REST APIs"],
              },
              {
                category: "AI & LLM",
                items: [
                  "OpenAI",
                  "Gemini",
                  "Claude",
                  "Vercel AI SDK",
                  "Prompt Engineering",
                ],
              },
              {
                category: "Databases",
                items: ["PostgreSQL", "Supabase", "Turso"],
              },
              {
                category: "Automation",
                items: ["n8n"],
              },
              {
                category: "Tools",
                items: ["Git", "GitHub"],
              },
            ].map((group) => (
              <div key={group.category}>
                <h3 className="font-technical text-xs text-accent-primary tracking-widest uppercase mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-body text-sm text-text-secondary px-3 py-1.5 border border-border rounded-sm hover:border-border-hover hover:text-text-primary transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="min-h-screen flex items-center px-6 lg:px-24 lg:pl-48 py-24"
      >
        <div className="max-w-3xl">
          <p className="font-technical text-xs text-text-muted tracking-widest mb-8">
            05 — Path
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-700 leading-tight tracking-tight mb-16">
            Experience
          </h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <span className="font-technical text-xs text-text-muted whitespace-nowrap min-w-[80px]">
                2023 — Now
              </span>
              <div>
                <h3 className="font-display text-xl font-600">
                  Full-Stack Developer
                </h3>
                <p className="font-body text-text-secondary mt-2">
                  Building AI-powered tools, interactive web applications, and
                  automation platforms. Freelance and personal projects.
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-border" />
            <div className="flex gap-8 items-start">
              <span className="font-technical text-xs text-text-muted whitespace-nowrap min-w-[80px]">
                {/* PLACEHOLDER — Replace with actual years */}
                2016 — 2023
              </span>
              <div>
                <h3 className="font-display text-xl font-600">
                  Professional Basketball Player
                </h3>
                <p className="font-body text-text-secondary mt-2">
                  {/* PLACEHOLDER — Replace with actual team/league details */}
                  Competed at a professional level while developing software
                  engineering skills in parallel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="min-h-screen flex items-center px-6 lg:px-24 lg:pl-48 py-24"
      >
        <div className="max-w-3xl">
          <p className="font-technical text-xs text-text-muted tracking-widest mb-8">
            06 — Education
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-700 leading-tight tracking-tight mb-16">
            Education
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-xl font-600">
                Licenciada en Informática
              </h3>
              <p className="font-technical text-sm text-text-muted mt-1">
                Universidad Siglo 21
              </p>
            </div>
            <div className="w-full h-px bg-border" />
            <div>
              <h3 className="font-display text-xl font-600">
                Analista de Sistemas
              </h3>
              <p className="font-technical text-sm text-text-muted mt-1">
                Universidad Siglo 21
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="min-h-screen flex items-center px-6 lg:px-24 lg:pl-48 py-24"
      >
        <div className="max-w-3xl">
          <p className="font-technical text-xs text-text-muted tracking-widest mb-8">
            07 — Say hi
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-700 leading-tight tracking-tight mb-12">
            Let&apos;s see what happens.
          </h2>
          <p className="font-body text-text-secondary text-lg mb-12 max-w-xl">
            I&apos;m open to full-time roles, freelance projects, and
            interesting conversations. Reach out through any of these.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:hello@mili.dev"
              className="font-technical text-sm text-text-secondary hover:text-accent-primary transition-colors duration-300 group"
            >
              Email{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
            <a
              href="https://linkedin.com/in/mili"
              target="_blank"
              rel="noopener noreferrer"
              className="font-technical text-sm text-text-secondary hover:text-accent-primary transition-colors duration-300 group"
            >
              LinkedIn{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
            <a
              href="https://github.com/mili"
              target="_blank"
              rel="noopener noreferrer"
              className="font-technical text-sm text-text-secondary hover:text-accent-primary transition-colors duration-300 group"
            >
              GitHub{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
