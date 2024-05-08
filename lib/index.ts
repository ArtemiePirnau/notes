type Notes = {
  notes: {
    id: number;
    title: string;
    content?: string | null;
    type: string;
    userId: string;
    published: Date;
  }[];
};
type DataForm = {
  id: number;
  title: string;
  content?: string | null;
};
