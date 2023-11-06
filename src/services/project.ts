import { Project } from "@/types/project";

export const getProjectList = async () => {
  try {
    const response = await fetch(`${process.env.GITHUB_API}/users/Kittonn/repos`, {
      cache: "force-cache",
    });
    const data = await response.json();
    return data as Project[];
  } catch (error) {
    console.log(error);
  }
};
