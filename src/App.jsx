import { Github, Linkedin, Mail, ExternalLink, MapPin, Briefcase, GraduationCap, Play } from 'lucide-react';

const skills = [
  "Adobe After Effects",
  "Adobe Premiere Pro",
  "Adobe Photoshop",
  "Adobe Lightroom Classic",
  "Cinematography",
  "Color Grading",
  "Motion Graphics",
  "Short-Form Content",
  "Studio Photography",
  "Visual Storytelling",
];

const experience = [
  {
    type: "work",
    org: "Dream Captures",
    role: "Freelance Video Editor & Cinematographer",
    period: "2023 – Present",
    desc: "End-to-end production for weddings and events — from raw footage intake to final cinematic delivery. Specialized in emotionally resonant storytelling and color-graded timelines.",
  },
  {
    type: "work",
    org: "Idea Media Training Nepal",
    role: "Content Creator & Video Editor",
    period: "2022 – 2025",
    desc: "Produced and edited training media, promotional content, and social assets. Collaborated on multi-camera shoots and led post-production workflows.",
  },
  {
    type: "work",
    org: "Chhunumunu Memories",
    role: "Part-Time Studio Photographer",
    period: "2022 – 2025",
    desc: "Handled portrait and event photography, managed studio lighting setups, and delivered retouched photo sets to clients.",
  },
];

const education = [
  {
    type: "edu",
    org: "College of Information Technology & Engineering",
    role: "Bachelor of Computer Applications",
    period: "2023 – Present",
    desc: "Currently pursuing a BCA degree, building a strong foundation in software development, data structures, and systems design alongside my creative career.",
  },
  {
    type: "edu",
    org: "Idea Media Training Nepal",
    role: "Diploma in Media Production",
    period: "2021 – 2022",
    desc: "Mastered end-to-end photography, cinematography, and video editing across professional studio and field environments.",
  },
];

const projects = [
  {
    title: "Wedding Cinematic Edits",
    desc: "Transforming raw wedding footage into emotionally resonant, cinematic love stories. Curated color grades, custom transitions, and original sound design.",
    tags: ["Premiere Pro", "After Effects", "Lightroom", "Cinematography"],
    link: "https://drive.google.com/drive/folders/1kle2_yLvzs0brAaEa-jWyQwjGnte44R3?usp=sharing",
    linkLabel: "View Reel",
  },
];

function SkillBadge({ label }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700/60 hover:border-zinc-500 hover:text-zinc-100 transition-all duration-200 cursor-default">
      {label}
    </span>
  );
}

function TimelineItem({ item }) {
  const Icon = item.type === "work" ? Briefcase : GraduationCap;
  return (
    <div className="group flex gap-4 py-5 border-b border-zinc-800/60 last:border-0">
      <div className="mt-0.5 flex-shrink-0">
        <div className="w-8 h-8 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-zinc-500 transition-colors duration-200">
          <Icon size={14} className="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
          <div>
            <p className="text-sm font-semibold text-zinc-100">{item.org}</p>
            <p className="text-xs text-zinc-400 mt-0.5">{item.role}</p>
          </div>
          <span className="text-xs text-zinc-500 font-mono whitespace-nowrap flex-shrink-0">{item.period}</span>
        </div>
        <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group relative flex flex-col p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors duration-200">
          {project.title}
        </h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-200 transition-colors duration-200 mt-0.5"
          >
            {project.linkLabel === "View Reel" ? (
              <Play size={11} className="fill-current" />
            ) : (
              <ExternalLink size={11} />
            )}
            <span>{project.linkLabel}</span>
          </a>
        )}
      </div>
      <p className="text-xs text-zinc-500 leading-relaxed mb-4 flex-1">{project.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-400 border border-zinc-700/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">{children}</span>
      <div className="flex-1 h-px bg-zinc-800" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24">

        {/* ── HERO ── */}
        <section className="mb-20">
          <div className="flex items-start justify-between gap-6 mb-6">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-1">
                Arpit Prajapati
              </h1>
              <div className="flex items-center gap-1.5 text-sm text-zinc-500 mb-5">
                <MapPin size={13} className="text-zinc-600" />
                <span>Bhaktapur, Nepal</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
                Freelance video editor and content creator studying Computer Applications.
                I blend technical problem-solving with creative storytelling to turn raw footage into
                high-impact visual experiences — from dynamic short-form content to polished cinematic narratives.
              </p>
            </div>
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 border-2 border-zinc-700 flex items-center justify-center ring-2 ring-zinc-800 ring-offset-2 ring-offset-slate-950">
                <span className="text-xl sm:text-2xl font-bold text-zinc-300">AP</span>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/TechnoArpit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-100 hover:bg-zinc-800/50 transition-all duration-200"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/arpit-prajapati-5319b12a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-100 hover:bg-zinc-800/50 transition-all duration-200"
            >
              <Linkedin size={13} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:prajapatiarpit987@gmail.com"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-100 hover:bg-zinc-800/50 transition-all duration-200"
            >
              <Mail size={13} />
              <span>Email</span>
            </a>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="mb-16">
          <SectionLabel>About</SectionLabel>
          <p className="text-sm text-zinc-400 leading-relaxed">
            I'm at an interesting intersection — studying software and building with pixels during the day,
            then cutting footage and crafting stories into the night. My work in video production taught me
            that the best experiences are always intentional: every cut, every frame, every transition earns
            its place. I carry that philosophy into everything I build. Whether I'm writing code or compositing
            a timeline, I'm thinking about the audience — what they feel, what they remember, what they do next.
            Right now, I'm expanding my technical toolkit with a computer applications degree while continuing
            to take on creative projects that challenge me to communicate at the highest level.
          </p>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="mb-16">
          <SectionLabel>Work Experience</SectionLabel>
          <div>
            {experience.map((item) => (
              <TimelineItem key={item.org + item.period} item={item} />
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section className="mb-16">
          <SectionLabel>Education</SectionLabel>
          <div>
            {education.map((item) => (
              <TimelineItem key={item.org + item.period} item={item} />
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="mb-16">
          <SectionLabel>Skills & Tools</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="mb-16">
          <SectionLabel>Projects</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section>
          <SectionLabel>Contact</SectionLabel>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 text-center">
            <h2 className="text-lg font-semibold text-zinc-100 mb-2">Get in Touch</h2>
            <p className="text-sm text-zinc-500 mb-6 max-w-sm mx-auto">
              Have a project in mind, a collaboration opportunity, or just want to talk craft?
              My inbox is always open.
            </p>
            <a
              href="mailto:prajapatiarpit987@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-900 text-sm font-semibold hover:bg-white transition-colors duration-200"
            >
              <Mail size={14} />
              prajapatiarpit987@gmail.com
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-zinc-800/60 flex items-center justify-between">
            <span className="text-xs text-zinc-600">© 2025 Arpit Prajapati</span>
            <span className="text-xs text-zinc-700">Bhaktapur, Nepal</span>
          </div>
        </section>

      </div>
    </div>
  );
}
