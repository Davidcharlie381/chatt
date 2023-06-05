export default function Message({ sender, message, time }) {
  return (
    <>
      {sender === "You" ? (
        <div className="p-5 pt-3 w-full mb-4 bg-blue-500 rounded-lg rounded-bl-none">
          <div className="text-white font-medium text-lg">{sender}</div>
          <div className="mt-2 text-gray-200">{message}</div>
          <span className="block text-right text-sm">{time}</span>
        </div>
      ) : (
        <div className="p-5 pt-3 mb-4 bg-slate-700 rounded-lg rounded-br-none">
          <div className="text-right text-white font-medium text-lg">
            {sender}
          </div>
          <div className="mt-2 text-gray-200">{message}</div>
          <span className="block text-right text-sm">{time}</span>
        </div>
      )}
    </>
  );
}
