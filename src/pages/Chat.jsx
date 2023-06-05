import { useRef } from "react";
import { useState } from "react";
import Form from "../components/Form";
import Message from "../components/Message";

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
  }


  return (
    <div>
      <div className="bg-gray-900 text-gray-200 py-5 flex gap-10 justify-center shadow-md">
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
      </div>
      <div
        className="h-[80vh] pb-16 overflow-y-scroll bg-gray-800"
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
        </div>
      </div>
      <div className="bg-gray-700 fixed bottom-0 p-4 w-full flex justify-center items-center">
        <Form messages={messages} setMessages={setMessages} person={person} chatcenter={chatcenter} />
      </div>
    </div>
  );
}
