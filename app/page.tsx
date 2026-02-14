import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import SkillGroup from "@/components/SkillGroup";
import AiChat from "@/components/AiChat";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative overflow-hidden pt-28">
      <Navbar />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_40%)]" />

      {/* Hero Section */}
      <Section>
        <Container>
          <AnimatedSection>
            <div className="relative max-w-3xl">
              <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl -z-10" />
              <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl -z-10" />

              <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
                Machine Learning Engineer
              </p>

              <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-tight text-white">
                Building intelligent systems
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
                  for real-world impact.
                </span>
              </h1>

              <p className="mt-6 text-lg text-neutral-400 max-w-xl leading-relaxed">
                I build production-style AI and machine learning systems, from data
                pipelines and model training to deployment, monitoring, and evaluation
                with a strong focus on reliability, interpretability, and real-world impact.
              </p>

              <div className="mt-10 flex gap-4">
                <Button href="#projects">View Projects</Button>
                <Button href="#contact" variant="secondary">
                  Contact Me
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Projects Section */}
      <Section>
        <Container>
          <AnimatedSection>
            <div id="projects" className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white">Projects</h2>
              <p className="mt-4 text-neutral-400 leading-relaxed max-w-xl">
                A selection of systems showcasing production-style machine learning,
                retrieval-augmented generation, forecasting, anomaly detection, and
                applied AI engineering.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">

            <AnimatedSection delay={0.1}>
              <ProjectCard
                title="Enterprise AI Assistant (RAG System)"
                href="https://github.com/Udeibom/ai-doc-assistant"
                problem="Enterprise documents are large, unstructured, and prone to hallucinated AI responses."
                description="Designed and implemented a production-style Retrieval-Augmented Generation (RAG) system with document ingestion pipelines, embedding search (FAISS/Chroma), hallucination guardrails, citation enforcement, streaming responses, and evaluation testing."
                tech={[
                  "Python",
                  "FastAPI",
                  "LangChain",
                  "FAISS/ChromaDB",
                  "OpenAI/HuggingFace",
                  "RAG",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <ProjectCard
                title="Exchange Rate Forecasting System"
                href="https://github.com/Udeibom/rate-forcaster"
                problem="Volatile exchange rates require reliable forecasting and drift monitoring."
                description="Built an end-to-end ML forecasting system with feature pipelines, time-series validation, automated model selection, experiment tracking, and live inference for real-time and batch predictions."
                tech={[
                  "Python",
                  "Pandas",
                  "Scikit-learn",
                  "Time-Series Validation",
                  "Experiment Tracking",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <ProjectCard
                title="Transaction Anomaly Detection System"
                href="https://github.com/Udeibom/transaction-anomaly-ml"
                problem="Fraud detection with no labeled anomaly data."
                description="Developed an unsupervised anomaly detection system using Isolation Forest and autoencoders with percentile-based thresholding and drift monitoring for behavioral change detection."
                tech={[
                  "Python",
                  "Scikit-learn",
                  "TensorFlow",
                  "Isolation Forest",
                  "Drift Monitoring",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <ProjectCard
                title="Plant Disease Detection (Computer Vision)"
                href="https://github.com/Udeibom/Plant_disease_detector"
                problem="Early detection of plant diseases from leaf images."
                description="Built a CNN-based image classification model using TensorFlow/Keras and deployed an interactive Streamlit app for real-time inference."
                tech={[
                  "TensorFlow",
                  "Keras",
                  "CNN",
                  "Streamlit",
                  "Computer Vision",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <ProjectCard
                title="Power Outage Prediction Model"
                href="https://github.com/Udeibom/outage_alert_app"
                problem="Predicting outages using weather and grid data."
                description="Developed a classification model with data cleaning, feature selection, and evaluation to predict power outages using structured environmental and grid datasets."
                tech={[
                  "Python",
                  "Scikit-learn",
                  "Feature Engineering",
                  "Model Evaluation",
                ]}
              />
            </AnimatedSection>

          </div>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section>
        <Container>
          <AnimatedSection>
            <div id="skills" className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white">Skills</h2>
              <p className="mt-4 text-neutral-400 leading-relaxed max-w-xl">
                Tools and technologies I use to design, build, deploy, and monitor
                production-style machine learning systems.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">

            <AnimatedSection delay={0.1}>
              <SkillGroup
                title="Machine Learning & AI Systems"
                description="Designing, training, evaluating, and deploying production-style ML systems."
                skills={[
                  "Python",
                  "NumPy",
                  "pandas",
                  "Scikit-learn",
                  "TensorFlow",
                  "PyTorch",
                  "Time-Series Modeling",
                  "Unsupervised Learning",
                  "Model Evaluation",
                  "SHAP",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <SkillGroup
                title="LLMs & Retrieval-Augmented Generation"
                description="Building grounded AI systems with guardrails and vector search."
                skills={[
                  "LangChain",
                  "LlamaIndex",
                  "FAISS",
                  "ChromaDB",
                  "OpenAI API",
                  "HuggingFace",
                  "Prompt Engineering",
                  "Hallucination Control",
                  "Citation Enforcement",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <SkillGroup
                title="Backend, Deployment & Monitoring"
                description="Supporting ML systems in production-like environments."
                skills={[
                  "FastAPI",
                  "SQL",
                  "Docker (Basic)",
                  "AWS (Familiarity)",
                  "Feature Pipelines",
                  "Experiment Tracking",
                  "Drift Detection",
                  "Model Monitoring",
                  "Git & GitHub",
                  "Linux",
                ]}
              />
            </AnimatedSection>

          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section>
        <Container>
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white">About</h2>

              <p className="mt-4 text-neutral-400 leading-relaxed max-w-xl">
                I’m a Machine Learning Engineer with a background in Computer Science
                and hands-on experience building production-style AI systems across
                forecasting, anomaly detection, computer vision, and retrieval-augmented
                generation (RAG).
              </p>

              <p className="mt-4 text-neutral-400 leading-relaxed max-w-xl">
                My work focuses on the full ML lifecycle which encompasses data pipelines and feature
                engineering to model evaluation, deployment, monitoring, and guardrails.
                I care deeply about reliability, interpretability, and building systems
                that are both technically sound and practically useful.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* AI Assistant Section */}
      <Section>
        <Container>
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white">C@l</h2>
              <p className="mt-4 text-neutral-400 leading-relaxed max-w-xl">
                You can ask questions about my background, projects, or
                skills and get instant answers.
              </p>

              <div className="mt-8">
                <AiChat />
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section>
        <Container>
          <AnimatedSection>
            <div id="contact" className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white">Contact</h2>

              <p className="mt-4 text-neutral-400 leading-relaxed max-w-xl">
                I’m open to machine learning engineering roles and applied AI
                opportunities. If you’d like to collaborate or discuss a project,
                feel free to reach out.
              </p>

              <div className="mt-8 space-y-3 text-sm text-neutral-400">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:chimmeremkc@gmail.com"
                    className="underline underline-offset-4"
                  >
                    chimmeremkc@gmail.com
                  </a>
                </p>

                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/caleb-udeibom-3495a023b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    linkedin.com
                  </a>
                </p>

                <p>
                  GitHub:{" "}
                  <a
                    href="https://github.com/Udeibom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    github.com/Udeibom
                  </a>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      <footer className="border-t border-neutral-800 py-10 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Caleb Udeibom.</p>
        <p className="mt-2">
          Built with Next.js, AI, and modern web technologies.
        </p>
      </footer>
    </main>
  );
}
