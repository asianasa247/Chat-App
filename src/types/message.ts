export type Message = {
  id: string;
  text?: string;
  type: "text" | "image" | "audio" | "file";
  senderId: string;
  timestamp: number;
  status: "sending" | "sent" | "delivered" | "read" | "failed";
  isSender: boolean;
  attachments?: string[];
};
