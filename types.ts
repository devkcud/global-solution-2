// Fix: Import React to resolve 'Cannot find namespace "React"'.
import React from "react";

export type SkillCategory = "tech" | "human" | "innovation";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
}

export interface FutureJob {
  id: string;
  title: string;
  emoji: string;
  description: string;
  detailedDescription: string;
  mappedFrom: string[];
  skillsToDevelop: string[];
}

export interface MatchedJob extends FutureJob {
  score: number;
  matchingSkills: string[];
}

export interface SkillContextType {
  selectedSkills: string[];
  setSelectedSkills: React.Dispatch<React.SetStateAction<string[]>>;
  toggleSkill: (skillId: string) => void;
  recommendedCourses: string[];
  setRecommendedCourses: (courseIds: string[]) => void;
}

export interface Video {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  videos: Video[];
}

export interface Review {
  id: string;
  oderId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export type ResourceType = "article" | "video" | "book" | "tool" | "course";

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: ResourceType;
  author?: string;
}

export interface CourseResources {
  aiRecommended: Resource[];
  handPicked: Resource[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  thumbnail: string;
  skills: string[];
  modules: Module[];
  reviews: Review[];
  quiz: QuizQuestion[];
  resources: CourseResources;
  enrolledCount: number;
}

export interface CourseProgress {
  courseId: string;
  completedVideos: string[];
  quizCompleted: boolean;
  quizScore: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
  courseProgress: CourseProgress[];
  avatar: string;
  bio: string;
  joinDate: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  enrollInCourse: (courseId: string) => void;
  unenrollFromCourse: (courseId: string) => void;
  markVideoCompleted: (courseId: string, videoId: string) => void;
  markVideoIncomplete: (courseId: string, videoId: string) => void;
  completeQuiz: (courseId: string, score: number) => void;
}
