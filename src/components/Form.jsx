import { useState } from "react";

import { TbSend } from "react-icons/tb";

export default function Form({ messages, setMessages, person }) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.length > 0 || message.trim.length > 0) {
      setMessages([
        ...messages,
        {
          sender: person,
          text: message,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
        },
      ]);
    }

    setMessage("");
  };

  return (
    <form
      action=""
      className="flex justify-between gap-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type your message ..."
        className="p-3 px-4 rounded-md"
      />
      <button className="text-4xl text-gray-200">
        <TbSend />
      </button>
    </form>
  );
}
