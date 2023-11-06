import { data } from "@/data";

export default function ProfileSection() {
  const { profile } = data;
  return (
    <div>
      <p>{profile.about}</p>
    </div>
  )
}