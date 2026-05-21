export const FILTERS = ["All", "Active", "Completed"];

export const CATEGORIES = [
  {
    label: "Work",
    bg: "var(--color-work-bg)",
    text: "var(--color-work-text)",
    border: "var(--color-work-border)",
  },
  {
    label: "Personal",
    bg: "var(--color-personal-bg)",
    text: "var(--color-personal-text)",
    border: "var(--color-personal-border)",
  },
  {
    label: "Urgent",
    bg: "var(--color-urgent-bg)",
    text: "var(--color-urgent-text)",
    border: "var(--color-urgent-border)",
  },
];

export const getCategoryStyle = (label) =>
  CATEGORIES.find((c) => c.label === label) || CATEGORIES[0];

let _id = Date.now();
export const uid = () => String(++_id);

export const SAMPLE_TASKS = [
  { id: uid(), text: "Design the new landing page", done: false, category: "Work" },
  { id: uid(), text: "Pick up groceries", done: false, category: "Personal" },
  { id: uid(), text: "Submit project proposal by EOD", done: false, category: "Urgent" },
  { id: uid(), text: "Read documentation", done: true, category: "Work" },
];
