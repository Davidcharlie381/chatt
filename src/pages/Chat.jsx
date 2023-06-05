import { useRef } from "react";
import { useState } from "react";
import Form from "../components/Form";
import Message from "../components/Message";
import { CgClose } from "react-icons/cg";

export default function Chat({ name }) {
  const [messages, setMessages] = useState([
    {
      sender: "You",
      text: "I love you",
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    },
    {
      sender: name,
      text: "Awwwn. I love me too.",
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    },
    {
      sender: "You",
      text: "I said it. You look like the girl that broke my heart when I was 7.",
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    },
  ]);
  const [person, setPerson] = useState("You");

  const chatcenter = useRef(null);

  const scrollBottom = () => {
    setTimeout(() => {
      chatcenter.current.scrollTo({
        top: chatcenter.current.scrollHeight,
        behavior: "smooth",
      });
    }, 0);
  };

  const clearChats = () => {
    if (messages.length > 0) { 
      if (confirm("Do you want to clear your messages?")) {
        setMessages([]);
      }
    }
  };

  return (
    <div>
      <div className="relative bg-gray-900 text-gray-200 py-5 flex gap-5 justify-center items-center shadow-md">
        <button
          className={` p-2 px-8 font-semibold rounded ${
            person === "You" ? "bg-blue-400" : "bg-gray-700"
          }`}
          onClick={() => {
            setPerson("You");
            scrollBottom();
          }}
        >
          You
        </button>
        <button
          className={` p-2 px-8 font-semibold rounded ${
            person === name ? "bg-blue-400" : "bg-gray-700"
          }`}
          onClick={() => {
            setPerson(name);
            scrollBottom();
          }}
        >
          {name}
        </button>
        <div
          className="text-gray-300 absolute right-6 lg:right-20 top-7 cursor-pointer text-[24px]"
          onClick={clearChats}
        >
          <CgClose />
        </div>
      </div>
      <div
        className="h-[90vh] pb-16 overflow-y-scroll bg-gray-800"
        ref={chatcenter}
      >
        <div className="m-auto max-w-xs pt-5">
          {messages?.map((message, idx) => {
            return (
              <Message
                key={idx}
                sender={message.sender}
                message={message.text}
                time={message.time}
              />
            );
          })}
          {messages.length <= 0 && (
            <div className="text-center text-gray-300">
              No messages yet. Start chatting.
            </div>
          )}
        </div>
      </div>
      <div className="bg-gray-700 fixed bottom-0 p-4 w-full flex justify-center items-center">
        <Form
          messages={messages}
          setMessages={setMessages}
          person={person}
          chatcenter={chatcenter}
        />
      </div>
    </div>
  );
}
