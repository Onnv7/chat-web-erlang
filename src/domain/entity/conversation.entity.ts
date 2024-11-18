export type ConversationSummaryEntity = {
  name: string;
  imageUrl: string;
};

export type ConversationEntity = {
  roomId: number;
  type: string;
  roomName: string;
};

export type MessageEntity = {
  content: string;
  createdAt: string;
  senderId: number;
};

export type ConversationInfoEntity = {
  memberList: {
    id: number;
    name: string;
  }[];
  name: string;
};
