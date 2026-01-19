import { useEffect, useState } from "react";

interface UsePageAnnouncementOptions {
  title: string;
  announcement?: string;
  delay?: number;
}

export function usePageAnnouncement({
  title,
  announcement,
  delay = 500,
}: UsePageAnnouncementOptions) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = `${title} - Divino Alimento`;
    const timer = setTimeout(() => {
      setMessage(announcement || title);
    }, delay);
    return () => clearTimeout(timer);
  }, [title, announcement, delay]);

  return message;
}

interface PageAnnouncerProps {
  message: string;
}

export function PageAnnouncer({ message }: PageAnnouncerProps) {
  return (
    <div
      role="status"
      aria-live="assertive"
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}
