import { Link } from "@nextui-org/link";


export default function Skills() {
	const contentList = [
		{ 
            title: 'Languages', 
            sub: ['"TypeScript, Javascript, Python, Haskell, C, C#"']
        },
        { 
            title: 'Frontend', 
            sub: ['"Next.js, ReactJS, React Native, Tailwind CSS, Bootstrap, HTML/CSS"']
        },
        { 
            title: 'Backend', 
            sub: ['"NodeJs, Express.js, MongoDB, SQL, LangChain, OpenAI"']
        },
        { 
            title: 'Tools', 
            sub: ['"Figma, Adobe Photoshop, Git, Azure"']
        }
    ]
	return (
		<>
            <div id="skills" className="pt-16 h-full">
                {contentList.map((item, index) => (
					<p key={index} className="mb-1">
						<span className="purple">var </span>
						<span className="green">{item.title}</span>
						<span> = </span>
						<span className="orange">{item.sub.join(', ')}</span>
					</p>
				))}
            </div>
		</>
	);
}
