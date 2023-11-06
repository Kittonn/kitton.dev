import { data } from "@/data";

export default function ProfileSection() {
  const { profile } = data;
  return (
    <div className="text-neutral-200">
      <p>{profile.about}</p>
    </div>
  )
}