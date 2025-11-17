import { createContext, useState, useContext, useCallback } from "react";
import { SkillContextType } from "../types";

const SkillContext = createContext<SkillContextType | undefined>(undefined);

export const SkillProvider = ({ children }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [recommendedCourses, setRecommendedCoursesState] = useState<string[]>([]);

  const toggleSkill = useCallback((skillId: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId)
        ? prev.filter((id) => id !== skillId)
        : [...prev, skillId]
    );
  }, []);

  const setRecommendedCourses = useCallback((courseIds: string[]) => {
    setRecommendedCoursesState(courseIds);
    // Store in localStorage for persistence across login
    localStorage.setItem("recommendedCourses", JSON.stringify(courseIds));
  }, []);

  return (
    <SkillContext.Provider
      value={{
        selectedSkills,
        setSelectedSkills,
        toggleSkill,
        recommendedCourses,
        setRecommendedCourses,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};

export const useSkills = () => {
  const context = useContext(SkillContext);
  if (context === undefined) throw new Error("Erro de Context");
  return context;
};
