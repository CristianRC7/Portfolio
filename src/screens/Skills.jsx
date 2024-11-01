import { Code, Globe, Server, Cpu, Smartphone } from 'lucide-react';

function Skills() {
  const skills = [
    { name: 'JavaScript', icon: <Code className="w-6 h-6" /> },
    { name: 'HTML/CSS', icon: <Globe className="w-6 h-6" /> },
    { name: 'PHP', icon: <Server className="w-6 h-6" /> },
    { name: 'C#', icon: <Cpu className="w-6 h-6" /> },
    { name: 'React', icon: <Code className="w-6 h-6" /> },
    { name: 'React Native', icon: <Smartphone className="w-6 h-6" /> },
  ];

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
