import { createContext, useState, useContext, useCallback } from "react";
import { AuthContextType, User, CourseProgress } from "../types";
import { mockUsers } from "../data/db";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((email: string, password: string): boolean => {
    // Simple mock authentication
    const foundUser = mockUsers.find((u) => u.email === email);
    if (foundUser && password === "123456") {
      setUser(foundUser);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const enrollInCourse = useCallback((courseId: string) => {
    if (user && !user.enrolledCourses.includes(courseId)) {
      const newProgress: CourseProgress = {
        courseId,
        completedVideos: [],
        quizCompleted: false,
        quizScore: 0,
      };
      setUser({
        ...user,
        enrolledCourses: [...user.enrolledCourses, courseId],
        courseProgress: [...user.courseProgress, newProgress],
      });
    }
  }, [user]);

  const unenrollFromCourse = useCallback((courseId: string) => {
    if (user) {
      setUser({
        ...user,
        enrolledCourses: user.enrolledCourses.filter((id) => id !== courseId),
        courseProgress: user.courseProgress.filter((p) => p.courseId !== courseId),
      });
    }
  }, [user]);

  const markVideoCompleted = useCallback((courseId: string, videoId: string) => {
    if (user) {
      const updatedProgress = user.courseProgress.map((progress) => {
        if (progress.courseId === courseId && !progress.completedVideos.includes(videoId)) {
          return {
            ...progress,
            completedVideos: [...progress.completedVideos, videoId],
          };
        }
        return progress;
      });
      setUser({
        ...user,
        courseProgress: updatedProgress,
      });
    }
  }, [user]);

  const markVideoIncomplete = useCallback((courseId: string, videoId: string) => {
    if (user) {
      const updatedProgress = user.courseProgress.map((progress) => {
        if (progress.courseId === courseId) {
          return {
            ...progress,
            completedVideos: progress.completedVideos.filter((id) => id !== videoId),
          };
        }
        return progress;
      });
      setUser({
        ...user,
        courseProgress: updatedProgress,
      });
    }
  }, [user]);

  const completeQuiz = useCallback((courseId: string, score: number) => {
    if (user) {
      const updatedProgress = user.courseProgress.map((progress) => {
        if (progress.courseId === courseId) {
          return {
            ...progress,
            quizCompleted: true,
            quizScore: score,
          };
        }
        return progress;
      });
      setUser({
        ...user,
        courseProgress: updatedProgress,
      });
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        enrollInCourse,
        unenrollFromCourse,
        markVideoCompleted,
        markVideoIncomplete,
        completeQuiz,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
