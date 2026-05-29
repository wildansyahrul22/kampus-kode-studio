export function TechStack() {
  const technologies = [
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Svelte",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    },
    {
      name: "Flutter",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Rust",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
    },
    {
      name: "PostgreSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Docker",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ];

  return (
    <section
      id="technologies"
      className="py-20 bg-white border-y border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">
          Teknologi Modern
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900">
          Didukung oleh Tech Stack Terbaik
        </h3>
      </div>

      {/* Marquee Animation */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4 px-8">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-max"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold font-heading text-slate-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient overlays to smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
