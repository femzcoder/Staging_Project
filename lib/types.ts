export interface ButtonProps{
    iconUrl?: string;
    handleClick?: () => void;
    disabled?: boolean;
    styles?: string;
    text?: string;
    type?: "button" | "submit" | "reset";
}

export interface SlideCardProps { title: string, description: string, imageUrl: string, buttonText?: string, handleClick?: () => void }

export type TabItem = {
  title: string;
  content: React.ReactNode;
};

export type PrimaryTabContainerProps = {
  TabData: TabItem[];
  hasAssistant?: boolean;
};

export type Message = {
  id: number;
  sender: "user" | "bot";
  text: React.ReactNode; // can be string or JSX
};

export type User = {
  name: string;
  position: string;
};

export type ChatModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  messages: Message[];
  user: User;
  onSendMessage?: (text: string) => void;
};

export type OwnPostProps = {
  icon: string;
  name?: string;
  time: string;
  title?: string;
  description?: string;
  tags?: string[];
  likeCount?: number;
  commentCount?: number;
  repostCount?: number;
  engagementCount?: number;
  handleLike?: () => void;
  handleComment?: () => void;
  handleRepost?: () => void;
  handleEngagement?: () => void;
};
