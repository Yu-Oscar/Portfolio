import { Link } from "@nextui-org/link";

export default function Skills() {
  const contentList = [
    {
      title: "Languages",
      sub: ['"TypeScript, Javascript, Python, Haskell, C, Dart, C#"'],
    },
    {
      title: "Frontend",
      sub: [
        '"Next.js, ReactJS, React Native, Flutter, Tailwind CSS, Bootstrap, HTML/CSS"',
      ],
    },
    {
      title: "Backend",
      sub: ['"NodeJs, Express.js, MongoDB, SQL, LangChain, OpenAI"'],
    },
    {
      title: "Blockchain",
      sub: ['"Solidity, Forge, Wagmi, OpenZeppelin"'],
    },
    {
      title: "Tools",
      sub: ['"Figma, Photoshop, Git, Docker, Unity"'],
    },
  ];
  return (
    <>
      <div id="skills" className="pt-8 sm:pt-12 lg:pt-16 h-full px-2 sm:px-4">
        <div className="section-divider"></div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-8 text-center animate-fadeIn">skills</h2>
        <div className="glass p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto animate-fadeInUp">
          {contentList.map((item, index) => (
            <div key={index} className="mb-4 sm:mb-6 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="text-sm sm:text-base lg:text-lg font-mono leading-relaxed">
                <span className="purple font-semibold">const </span>
                <span className="green font-semibold">{item.title}</span>
                <span className="text-gray-300"> = </span>
                <span className="orange break-all">{item.sub.join(", ")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
