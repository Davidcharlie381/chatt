import { Link } from "react-router-dom";

export default function Home({ name, setName }) {
  return (
    <div className="bg-gray-800 text-gray-200 h-screen text-center">
      <h1 className="text-center font-bold text-4xl pt-20">Hi, there!</h1>
      <p className="m-5 max-w-[320px] lg:max-w-md mx-auto text-center">
        Welcome to your world of imaginations, where you create the scenes as
        you want them. Sadly, it's only illusional and we can't do anything
        about your single situation.
      </p>
      <p className="m-6">Enter your crush's name below: </p>

      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="flex max-w-xs lg:max-w-md mx-auto gap-3 flex-col lg:flex-row justify-center"
      >
        <input
          type="text"
          required
          value={name}
          placeholder="e.g., Amarachi"
          onChange={(e) => setName(e.target.value)}
          className="p-4 px-5 rounded-lg text-gray-800 "
        />

        <button className="bg-blue-500 p-4 rounded-md" type="submit">
          <Link to="chat">Proceed to Chat</Link>
        </button>
      </form>
    </div>
  );
}
