import Image from "next/image";
import { Skill } from "@/types/skill";

type Props = {
  skill: Skill;
};

export default function SkillCategory({ skill }: Props) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{skill.category}</h3>
      <div className="flex items-center gap-8 my-6">
        {skill.items.map((item, index) => (
          <Image
            key={index}
            src={item.logo}
            alt={`${item.name}'s logo`}
            width={42}
            height={42}
          />
        ))}
      </div>
    </div>
  );
}
