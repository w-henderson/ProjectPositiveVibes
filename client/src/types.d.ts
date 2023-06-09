type Report = {
  context: ReportContext;
  messages: ChatMessage[];
}

type ChatMessage = {
  id: string;
  content: string;
  author: string;
  timestamp: number;
  flag?: Flag;
}

type Flag = {
  category: string;
  severity: number;
}

type InsightData = {
  similar: string;
  result: string;
  message: ChatMessage;
}

type ReportContext = {
  id: string;
  user: string;
  reports: number;
  game: string;
  alliance: string;
  allianceDescription: string;
  created: number;
  lastSeen: number;
  device: string;
  ip: string;
  averageGameTime: number;
  threads: string[][];
  summary: string[];
  reporter: string;
  reporterReputation: number;
  reporteeReputation: number;
  insight: Insight;
}