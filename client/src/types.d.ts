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

type ReportContext = {
  reports: number;
  game: string;
  alliance: string;
  allianceDescription: string;
  created: number;
  lastSeen: number;
  device: string;
  averageGameTime: number;
}