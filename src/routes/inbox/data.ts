
import type { Message } from './message';

const _messages : Message[] = [
    {
      id: 1,
      sender: "John",
      isRead: 1,
      content: "Hello, how are you doing today?"
    },
    {
      id: 2,
      sender: "Jane",
      isRead: 0,
      content: "Hey, did you get my email?"
    },
    {
      id: 3,
      sender: "John",
      isRead: 0,
      content: "I'll be late for the meeting. Please inform the team."
    },
    {
      id: 4,
      sender: "Mark",
      isRead: 1,
      content: "Reminder: Don't forget about the upcoming deadline."
    },
    {
      id: 5,
      sender: "John",
      isRead: 1,
      content: "Let's grab lunch together later."
    },
    {
      id: 6,
      sender: "Mary",
      isRead: 0,
      content: "Can you please share the project update?"
    },
    {
      id: 7,
      sender: "Mary",
      isRead: 1,
      content: "Thank you for your help. I appreciate it!"
    },
    {
      id: 8,
      sender: "Jane",
      isRead: 0,
      content: "I need your assistance with a task."
    },
    {
      id: 9,
      sender: "Mark",
      isRead: 1,
      content: "Here are the meeting notes from yesterday."
    },
    {
      id: 10,
      sender: "John",
      isRead: 0,
      content: "I have some exciting news to share!"
    }
  ];

  export { _messages };