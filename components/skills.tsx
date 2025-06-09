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
      <div id="skills" className="pt-16 h-full">
        {contentList.map((item, index) => (
          <p key={index} className="mb-1">
            <span className="purple">var </span>
            <span className="green">{item.title}</span>
            <span> = </span>
            <span className="orange">{item.sub.join(", ")}</span>
          </p>
        ))}
      </div>
    </>
  );
}
