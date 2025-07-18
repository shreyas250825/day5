type Instructor = { name: string; teaches: string[] };
type Admin = { name: string; manages: string[] };

type InstructorOrAdmin = Instructor | Admin;

type Assignment = {
  title: string;
  dueDate: Date;
  points: number;
};

type ReadonlyAssignment = Readonly<Assignment>;

const assignment: ReadonlyAssignment = {
  title: "Math Quiz",
  dueDate: new Date(),
  points: 10
};

// assignment.title = "Physics Quiz";  Error: Cannot assign to 'title' because it is a read-only property.

type LearnerStats = {
  quizzes: number;
  videos: number;
  assignments: number;
};

type StatsAsStrings = {
  [K in keyof LearnerStats]: string;
};

const stringStats: StatsAsStrings = {
  quizzes: "5",
  videos: "12",
  assignments: "3"
};
